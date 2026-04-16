import { AppError } from "../errors/app-error";

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateLimitBucket>();

type RateLimitConfig = {
  key: string;
  maxRequests: number;
  windowMs: number;
};

export function enforceRateLimit({ key, maxRequests, windowMs }: RateLimitConfig) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }

  if (bucket.count >= maxRequests) {
    throw new AppError("Too many requests. Please try again later.", 429, "RATE_LIMITED");
  }

  bucket.count += 1;
  buckets.set(key, bucket);
}
