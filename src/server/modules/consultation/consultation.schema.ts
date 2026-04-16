import { z } from "zod";

export const consultationCategoryValues = [
  "FAMILY",
  "CRIMINAL",
  "CIVIL",
  "CORPORATE",
  "LABOR",
  "REAL_ESTATE",
  "OTHER"
] as const;

export const createConsultationSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s\-()]{7,20}$/),
  category: z.enum(consultationCategoryValues),
  problem: z.string().trim().min(10).max(1000)
});

export type CreateConsultationInput = z.infer<typeof createConsultationSchema>;
