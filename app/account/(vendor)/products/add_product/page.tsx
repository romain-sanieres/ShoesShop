"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TagInput from "../_components/TagInput";
import { ProductType } from "@/types";
import { ProductFormSchema } from "@/schema";
import { useState } from "react";
import { useToast } from "@/components/hooks/use-toast";
import { useServerActionMutation } from "@/lib/hooks/server-action-hooks";
import { createProductAction } from "@/app/zsa/product.action";
import { Loader2Icon } from "lucide-react";

export default function AddProduct() {
  const { toast } = useToast();
  const [tagList, setTagList] = useState<string[]>();
  const [resetTagList, setResetTagList] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductType>({ resolver: zodResolver(ProductFormSchema) });

  const { isPending, mutate } = useServerActionMutation(createProductAction, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const onSubmit: SubmitHandler<ProductType> = async (data) => {
    const formattedData = {
      ...data,
      tags: tagList?.join(",") || "",
      price: data.price.toString(),
      sku: data.sku || "",
      collection: data.collection || "",
    };

    mutate(formattedData);
    toast({
      className: "bg-emerald-500/40",
      title: "Succes",
      description: data.name + " has been successfully added to your products",
    });
    reset();
    setResetTagList(true);
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
                step="0.01"
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
            <TagInput action={setTagList} resetList={resetTagList} />
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
                  {isPending ? (
                    <Loader2Icon className="animate-spin" size={16} />
                  ) : (
                    "Create Product"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
