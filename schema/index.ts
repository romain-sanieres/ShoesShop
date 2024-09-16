import { z } from "zod";

export const RegisterFormSchema = z.object({
  email: z.string().min(2, { message: "Field required" }).email({
    message: "Email must be a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const ProductFormSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  price: z.string().min(2),
  collection: z.string(),
  tags: z.string().min(2),
  inventory: z.string().min(2),
  sku: z.string(),
});
