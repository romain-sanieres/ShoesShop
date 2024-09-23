"use client";
import AccordionInfo from "@/app/account/(vendor)/products/_components/AccordionInfo";
import Sizes from "@/app/account/(vendor)/products/_components/Sizes";
import { getProductAction } from "@/app/zsa/product.action";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function ProductId() {
  const [description, setDescription] = useState(false);
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getProductAction({ id: id as string });
      return products[0];
    },
  });

  if (isError) return <></>;
  if (isLoading) return <></>;
  console.log(data?.vendorId);
  return (
    <main className="min-h-[100dvh]">
      {data ? (
        <section className="max-lg:flex flex-col lg:grid lg:grid-cols-12 gap-x-8">
          <div className="w-full md:col-span-9">
            <div className="md:grid md:grid-cols-2 gap-3 flex flex-col">
              <div className="h-96 w-full bg-gray-100 shadow-md rounded"></div>
              <div className="h-96 w-full bg-gray-100 shadow-md rounded"></div>
              <div className="h-96 w-full bg-gray-100 shadow-md rounded"></div>
              <div className="h-96 w-full bg-gray-100 shadow-md rounded"></div>
              <div className="h-96 w-full bg-gray-100 shadow-md rounded"></div>
            </div>
          </div>
          <div className="w-full md:col-span-3 p-2 space-y-5 max-md:mt-10">
            <div>
              <p className="text-4xl font-semibold">{data.name}</p>
              <p>{data.collection}</p>
              <p className="text-lg">${data.price}</p>
            </div>
            <p>(note)</p>
            <p className="text-muted-foreground">{data.description}</p>
            <div className="space-y-2">
              <p>Size</p>
              <Sizes reference={data.id} price={data.price} />
            </div>
            <div className="flex gap-2 flex-grow-0">
              {data.tags?.split(",").map((item, index) => (
                <p
                  key={index}
                  className="bg-muted py-2 px-3 rounded-full cursor-pointer hover:shadow-md duration-300 text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex items-end">
              <p
                className={`text-muted-foreground ${
                  description ? null : "line-clamp-3"
                }`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                pariatur similique deserunt culpa ad veniam! Vero recusandae
                sint magnam aliquid officia voluptatum, reiciendis rerum fugiat
                quis sapiente distinctio harum atque dolores architecto
                excepturi cumque laboriosam numquam corrupti animi quos eveniet?
              </p>
              {description ? null : (
                <p
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setDescription(!description)}
                >
                  plus
                </p>
              )}
            </div>

            <div>
              <AccordionInfo />
            </div>
          </div>
        </section>
      ) : (
        <section className="h-[100dvh] grid place-content-center place-items-center">
          No product found
        </section>
      )}
    </main>
  );
}
