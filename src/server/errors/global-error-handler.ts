import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { AppError } from "./app-error";

type ErrorJson = {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};

export function handleApiError(error: unknown): NextResponse<ErrorJson> {
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid request payload.",
          details: error.flatten()
        }
      },
      { status: 400 }
    );
  }

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details
        }
      },
      { status: error.statusCode }
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Unexpected server error."
      }
    },
    { status: 500 }
  );
}
