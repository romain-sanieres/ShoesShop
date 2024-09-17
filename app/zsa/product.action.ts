import { companyAction } from "@/lib/zsa";
import { getCompanyAction } from "./company.action";
import { db } from "@/db";
import { z } from "zod";

export const getCompanyProducts = companyAction.handler(async () => {
  try {
    const [company] = await getCompanyAction();
    if (!company) {
      throw new Error("Company not found");
    }
    const products = await db.product.findMany({
      where: { vendorId: company.id },
    });
    return products || null;
  } catch (err) {
    throw new Error("Error");
  }
});

export const createProductAction = companyAction
  .input(
    z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      collection: z.string(),
      tags: z.string(),
      inventory: z.string(),
      limit: z.string(),
      ski: z.string(),
    })
  )
  .handler(async ({ input }) => {
    try {
      const [company] = await getCompanyAction();
      if (!company) {
        throw new Error("Company not found");
      }
      const products = await db.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: parseFloat(input.price),
          collection: input.collection,
          tags: input.tags,
          inventory: parseInt(input.inventory),
          stock_limit: parseInt(input.limit),
          vendorId: company.id,
        },
      });
      return products || null;
    } catch (err) {
      throw new Error("Error");
    }
  });
