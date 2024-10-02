"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMenProducts } from "../zsa/product.action";
import Product from "../../components/Product";

type ProductType = {
  id: string;
  name: string;
  price: number;
  collection?: string;
  createdAt: Date;
  comment?: any;
};

export default function Men() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const [products] = await getMenProducts();
      return products as ProductType[];
    },
  });

  if (isError) return <></>;
  if (isLoading) return <main className="min-h-[100dvh]"></main>;

  return (
    <main className="min-h-[100dvh] grid grid-cols-4 mt-10 gap-5">
      {Array.isArray(data) &&
        data
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((item, index) => (
            <Product
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              collection={item.collection || ""}
              date={item.createdAt}
              comments={item.comment}
            />
          ))}
    </main>
  );
}
