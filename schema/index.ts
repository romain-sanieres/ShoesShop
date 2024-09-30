import { z } from "zod";

export const RegisterFormSchema = z.object({
  email: z.string().min(2, { message: "Field required" }).email({
    message: "Email must be a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const CompanyFormSchema = z.object({
  name: z.string().min(2),
  stripe: z.string().min(2),
  description: z.string().min(2),
});

export const ProductFormSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  price: z.string().min(1),
  collection: z.string().optional(),
  gender: z.enum(["men", "women", "all"]).optional(),
  tags: z.string().optional(),
  sku: z.string().min(1),
});
