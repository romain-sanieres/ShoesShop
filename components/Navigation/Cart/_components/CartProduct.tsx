import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function CartProduct() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-end justify-between gap-x-4">
      <div className="flex flex-col gap-3">
        <div className="size-20 bg-muted rounded-lg"></div>
        <div className="select-none">
          <p className="text-sm">Atoms Model 251.12</p>
          <p className="text-sm">
            <span className="text-muted-foreground">Size:</span> Men 11
          </p>
        </div>
      </div>
      <div className="flex items-center border py-2 px-4 rounded-full">
        <MinusIcon size={15} className="cursor-pointer" onClick={() => quantity > 1 ? setQuantity(quantity -  1) : null}/>
        <p className="w-8 text-center text-sm select-none">{quantity}</p>
        <PlusIcon size={15} className="cursor-pointer" onClick={() => setQuantity(quantity + 1)}/>
      </div>
    </div>
  );
}
