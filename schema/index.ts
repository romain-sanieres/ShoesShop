import { z } from "zod";

export const RegisterFormSchema = z.object({
  email: z.string().min(2, { message: "Field required" }).email({
    message: "Email must be a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
