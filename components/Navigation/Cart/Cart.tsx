import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";
import CartProduct from "./_components/CartProduct";
import { Button } from "@/components/ui/button";
export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBagIcon size={20} className="hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div className="h-full">
          <div className="mt-5 space-y-4 max-h-[calc(100vh/2)] overflow-y-auto">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          <div className="mt-10">
            <Button className="w-full">Commander</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
