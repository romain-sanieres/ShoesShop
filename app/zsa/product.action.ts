"use server";

import { action, authedAction, companyAction } from "@/lib/zsa";
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

const createProductSizes = async (productId: string) => {
  const sizes = Array.from({ length: 13 }, (_, i) => 38 + i);
  const sizeData = sizes.map((size) => ({
    size: size.toString(),
    inventory: 0,
    productId: productId,
  }));

  try {
    await db.productSize.createMany({
      data: sizeData,
    });
  } catch (err) {
    console.error("Erreur lors de la création des tailles de produit :", err);
    throw new Error("Erreur lors de la création des tailles");
  }
};

export const createProductAction = companyAction
  .input(
    z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      gender: z.string(),
      collection: z.string(),
      tags: z.string(),
      sku: z.string(),
    })
  )
  .handler(async ({ input }) => {
    try {
      const [company] = await getCompanyAction();
      if (!company) {
        throw new Error("Company not found");
      }
      const product = await db.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: parseFloat(input.price),
          gender: input.gender,
          collection: input.collection,
          tags: input.tags,
          sku: input.sku,
          vendorId: company.id,
        },
      });
      await createProductSizes(product.id);
      return product || null;
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
        include: { sizes: true },
      });
      return product || null;
    } catch (err) {
      console.error(err);
    }
  });

export const updateProductAction = companyAction
  .input(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      price: z.string(),
      collection: z.string(),
      tags: z.string(),
      sku: z.string(),
    })
  )
  .handler(async ({ input }) => {
    try {
      console.log(input);
      const product = await db.product.update({
        where: {
          sku: input.sku,
        },
        data: {
          name: input.name,
          description: input.description,
          price: parseFloat(input.price),
          collection: input.collection,
          tags: input.tags,
          sku: input.sku,
        },
      });
    } catch (err) {
      console.error(err);
      throw new Error("Error");
    }
  });

export const updateStockAction = companyAction
  .input(
    z.object({
      id: z.string(),
      stockUpdates: z.array(
        z.object({
          size: z.string(),
          value: z.number(),
        })
      ),
    })
  )
  .handler(async ({ input }) => {
    const { id, stockUpdates } = input;
    // Logique pour mettre à jour le stock dans la base de données
    for (const update of stockUpdates) {
      await db.productSize.update({
        where: {
          productId_size: {
            productId: id,
            size: update.size,
          },
        },
        data: {
          inventory: update.value,
        },
      });
    }
    return { success: true };
  });


export const getLatestProducts = action.handler(async () => {
  try {
    const products = await db.product.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });
    return products || [];
  } catch (err) {
    console.error(err);
    throw new Error("Error");
  }
});

export const getMenProducts = action.handler(async () => {
  try {
    const menProducts = await db.product.findMany({
      where: {
        gender: "men",
        is_on_sale: true,
      },
      select: {
        id: true,
        name: true,
        price: true,
        collection: true,
        createdAt: true,
      },
    });
    return menProducts || [];
  } catch (err) {
    console.error(err);
    throw new Error("Error");
  }
});


export const getWomenProducts = action.handler(async () => {
  try {
    const womenProducts = await db.product.findMany({
      where: {
        gender: "women",
        is_on_sale: true,
      },
      select: {
        id: true,
        name: true,
        price: true,
        collection: true,
        createdAt: true,
      },
    });
    return womenProducts || [];
  } catch (err) {
    console.error(err);
    throw new Error("Error");
  }
});