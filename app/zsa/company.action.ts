"use server";

import { db } from "@/db";
import { authedAction } from "@/lib/zsa";
import { z } from "zod";
import { getUserAction } from "./user.action";

export const createCompanyAction = authedAction
  .input(
    z.object({
      name: z.string(),
      stripe: z.string(),
      description: z.string(),
    })
  )
  .handler(async ({ input }) => {
    const [user] = await getUserAction();
    if (user) {
      await db.vendor.create({
        data: {
          name: input.name,
          description: input.description,
          stripe_account: input.stripe,
          userId: user.id,
        },
      });
      return user;
    }
  });
