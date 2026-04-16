import { NextRequest } from "next/server";

import { createConsultationSchema } from "./consultation.schema";
import { ConsultationService } from "./consultation.service";

export class ConsultationController {
  private readonly service: ConsultationService;

  constructor() {
    this.service = new ConsultationService();
  }

  async create(request: NextRequest) {
    const payload = await request.json();
    const validatedPayload = createConsultationSchema.parse(payload);
    return this.service.bookConsultation(validatedPayload);
  }
}
