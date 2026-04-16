import { openApiSpecification } from "../../../server/docs/openapi";
import { successResponse } from "../../../server/lib/http-response";

export async function GET() {
  return successResponse(openApiSpecification);
}
