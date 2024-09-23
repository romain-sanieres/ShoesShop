"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCompanyProducts } from "@/app/zsa/product.action";
import ActiveProduct from "./ActiveProduct";

export default function ProductList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getCompanyProducts();
      return products[0];
    },
  });

  if (isError) return <></>;
  if (isLoading) return <></>;
  if (data)
    return (
      <section className="mt-5">
        <Table className="w-full">
          <TableCaption>A list of your products</TableCaption>
          <TableHeader className="w-full">
            <TableRow className="h-fit">
              <TableHead>Name</TableHead>
              <TableHead>Price $</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">On sell</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell
                  className={`${
                    item.inventory === item.stock_limit && "text-red-500"
                  }`}
                >
                  {item.inventory}
                </TableCell>
                <TableCell className="text-right">
                  <ActiveProduct id={item.id} active={item.is_on_sale}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    );
  return <p>No products</p>;
}
