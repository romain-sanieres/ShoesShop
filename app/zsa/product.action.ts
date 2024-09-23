"use server";

import { authedAction, companyAction } from "@/lib/zsa";
import { getCompanyAction } from "./company.action";
import { db } from "@/db";
import { z } from "zod";

export const getCompanyProducts = authedAction.handler(async () => {
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
      sku: z.string(),
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
          sku: input.sku,
          vendorId: company.id,
        },
      });
      return products || null;
    } catch (err) {
      console.log(err);
      throw new Error("Error");
    }
  });

export const changeSaleStatue = companyAction
  .input(
    z.object({
      id: z.string(),
      active: z.boolean(),
    })
  )
  .handler(async ({ input }) => {
    try {
      const updateStatus = await db.product.update({
        where: {
          id: input.id,
        },
        data: {
          is_on_sale: !input.active,
        },
      });
      return updateStatus || null;
    } catch (err) {
      console.error(err);
      throw new Error("Error");
    }
  });

export const getProductAction = authedAction
  .input(
    z.object({
      id: z.string(),
    })
  )
  .handler(async ({ input }) => {
    try {
      const product = await db.product.findUnique({
        where: {
          id: input.id,
        },
      });
      return product || null;
    } catch (err) {
      console.error(err);
    }
  });

export const updateProductAction = companyAction
  .input(
    z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      collection: z.string(),
      tags: z.string(),
      inventory: z.string(),
      limit: z.string(),
      sku: z.string(),
    })
  )
  .handler(async ({ input }) => {});
