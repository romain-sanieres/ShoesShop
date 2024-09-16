"use server";

import { action, authedAction } from "@/lib/zsa";
import { z } from "zod";

export const createCompanyAction = authedAction
  .input(
    z.object({
      name: z.string(),
      stripe: z.string(),
      description: z.string(),
    })
  )
  .handler(async ({ input }) => {
    console.log(input);
    return input;
  });
