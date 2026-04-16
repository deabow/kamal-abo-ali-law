import { NextRequest, NextResponse } from "next/server";

import { handleApiError } from "../../../server/errors/global-error-handler";
import { ConsultationController } from "../../../server/modules/consultation/consultation.controller";
import { enforceRateLimit } from "../../../server/security/rate-limit";

const controller = new ConsultationController();
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

function withCors(response: NextResponse) {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

export async function OPTIONS() {
  return withCors(
    NextResponse.json(
      { success: true },
      { status: 200 }
    )
  );
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

    enforceRateLimit({
      key: `consultation:${ip}`,
      maxRequests: 5,
      windowMs: 15 * 60 * 1000
    });

    const consultation = await controller.create(request);
    const whatsappLink = consultation?.whatsappLink;

    if (!whatsappLink) {
      return withCors(
        NextResponse.json(
          {
            success: false,
            error: {
              code: "MISSING_WHATSAPP_LINK",
              message: "Consultation service did not return a WhatsApp link."
            }
          },
          { status: 500 }
        )
      );
    }

    return withCors(
      NextResponse.json(
        {
          success: true,
          whatsappLink,
          data: consultation
        },
        { status: 201 }
      )
    );
  } catch (error) {
    console.error("POST /api/consultations failed:", error);
    return withCors(handleApiError(error));
  }
}
