"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import CartProduct from "./_components/CartProduct";
import { getCartAction } from "@/app/zsa/cart.action";
import { Badge } from "@/components/ui/badge"

export default function Cart() {

  const { data, isError, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const cartItems = await getCartAction();
      return cartItems[0]?.cart;
    },
  });
  if (isError) return <></>;
  if (isLoading) return <></>;


  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <ShoppingBagIcon size={20} className="hover:cursor-pointer" />
        {data && data?.length > 0 ? (
          <Badge className="absolute text-[.5rem] rounded-full w-4 h-4 p-0 flex items-center justify-center right-1 bottom-5">
            {data?.length}
          </Badge>
        ) : null}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="h-full mt-10">
          {data
            ?.sort((a, b) => a.product.name.localeCompare(b.product.name))
            .map((item, index) => (
              <CartProduct
                key={index}
                id={item.product.id}
                name={item.product.name}
                size={item.size}
                quantity={item.quantity}
                price={item.product.price}
              />
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
