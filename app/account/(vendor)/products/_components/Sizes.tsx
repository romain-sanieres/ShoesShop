"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/hooks/use-toast";

const sizes = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

export default function Sizes({ reference, price }: { reference: string, price : number }) {
  const [size, setSize] = useState<number>();
  const [sizeError, setSizeError] = useState(false);
  const addToCart = async (id: string) => {
    if (size) {
      toast({
        title: "Success",
        description: "Your article has been added to your cart",
      });
      setSizeError(false);
      setSize(0);
    } else {
      setSizeError(true);
    }
  };
  return (
    <>
      <Tabs defaultValue="men">
        <TabsList className="w-full">
          <TabsTrigger value="men" className="w-full">
            Men
          </TabsTrigger>
          <TabsTrigger value="women" className="w-full">
            Women
          </TabsTrigger>
        </TabsList>
        <TabsContent value="men">
          <div className="mt-5 grid grid-cols-4 xl:grid-cols-5 place-content-center gap-2">
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
        </TabsContent>
        <TabsContent value="women">
          <div className="mt-5 grid grid-cols-4 xl:grid-cols-5 place-content-center gap-2">
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
        </TabsContent>
      </Tabs>
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
