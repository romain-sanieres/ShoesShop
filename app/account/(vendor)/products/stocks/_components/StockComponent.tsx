"use client";
import { getProductAction } from "@/app/zsa/product.action";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function StockComponent({ session }: { session: string }) {
  const { id } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getProductAction({ id: id as string });
      return products[0];
    },
  });

  if (isLoading) return <></>;
  if (isError) return <></>;

  if (session === data?.vendorId) return <div>StockComponent</div>;
}
