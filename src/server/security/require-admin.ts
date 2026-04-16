import { NextRequest } from "next/server";

import { AppError } from "../errors/app-error";

import { verifyAdminToken } from "./jwt";

export function requireAdmin(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    throw new AppError("Missing bearer token.", 401, "UNAUTHORIZED");
  }

  const token = authHeader.replace("Bearer ", "");
  const payload = verifyAdminToken(token);

  if (payload.role !== "admin") {
    throw new AppError("Forbidden.", 403, "FORBIDDEN");
  }

  return payload;
}
