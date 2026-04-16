import { AppError } from "../errors/app-error";

export abstract class BaseService {
  protected fail(message: string, statusCode: number, code: string, details?: unknown): never {
    throw new AppError(message, statusCode, code, details);
  }

  protected assert(condition: unknown, message: string, statusCode = 400, code = "BAD_REQUEST"): void {
    if (!condition) {
      this.fail(message, statusCode, code);
    }
  }
}
