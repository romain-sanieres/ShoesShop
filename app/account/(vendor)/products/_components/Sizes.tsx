"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/hooks/use-toast";

const sizes = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

export default function Sizes({
  reference,
  price,
  name,
}: {
  reference: string;
  price: number;
  name: string;
}) {
  const [size, setSize] = useState<number>();
  const [sizeError, setSizeError] = useState(false);
  const addToCart = async (id: string) => {
    if (size) {
      toast({
        title: "Success",
        description: `${name} have been added to your cart`,
      });
      setSizeError(false);
      setSize(0);
    } else {
      setSizeError(true);
    }
  };
  return (
    <>
      <div className="grid grid-cols-4 xl:grid-cols-5 place-content-center gap-2">
        {sizes.map((item, index) => (
          <div
            className={`shadow w-full rounded-lg p-2 flex items-center justify-center border-2 ${
              size === item ? "border-primary" : " border-transparent"
            } cursor-pointer`}
            onClick={() => setSize(item)}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <p className="text-destructive text-xs h-5">
        {sizeError ? "Please select a size." : null}
      </p>
      <Button
        size={"lg"}
        className="text-lg w-full space-x-4"
        onClick={() => addToCart(reference)}
      >
        <span>Add to cart</span>
        <span>${price}</span>
      </Button>
    </>
  );
}
