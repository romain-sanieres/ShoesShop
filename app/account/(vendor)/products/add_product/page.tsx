"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductType } from "@/types";
import { ProductFormSchema } from "@/schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TagInput from "../_components/TagInput";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductType>({ resolver: zodResolver(ProductFormSchema) });

  const onSubmit: SubmitHandler<ProductType> = async (data) => {
    console.log(data);
  };
  return (
    <section>
      <p className="text-2xl font-semibold">New Product</p>
      <div className="mt-10">
        <div>
          <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                placeholder="Enter product name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe the product"
                className="min-h-[100px]"
                {...register("description", { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                type="number"
                placeholder="Enter price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="collection">Collection</Label>
              <Input
                id="collection"
                placeholder="Enter collection (Optional)"
                {...register("collection", { required: true })}
              />
            </div>
            <TagInput />
            <div className="grid gap-2">
              <Label htmlFor="inventory">Inventory *</Label>
              <Input
                id="inventory"
                type="number"
                placeholder="Enter quantity"
                {...register("inventory", { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sku">SKU</Label>
              <Input
                id="sku"
                placeholder="Enter SKU"
                {...register("sku", { required: true })}
              />
            </div>
            <div className="flex w-full justify-end">
              <div className="flex justify-between w-fit mt-5 gap-x-2">
                <Link href="/account/products">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button type="submit" className="w-full sm:w-auto">
                  Create Product
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
