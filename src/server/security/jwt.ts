import jwt from "jsonwebtoken";

import { AppError } from "../errors/app-error";

type JwtPayload = {
  sub: string;
  role: string;
  email: string;
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new AppError("Missing JWT secret configuration.", 500, "JWT_CONFIG_ERROR");
  }
  return secret;
}

export function signAdminToken(payload: JwtPayload, expiresIn: string | number = "8h") {
  return jwt.sign(payload, getJwtSecret(), { expiresIn });
}

export function verifyAdminToken(token: string): JwtPayload {
  try {
    return jwt.verify(token, getJwtSecret()) as JwtPayload;
  } catch (error) {
    throw new AppError("Unauthorized.", 401, "UNAUTHORIZED", error);
  }
}
