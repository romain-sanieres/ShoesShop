"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductType } from "@/types";
import { ProductFormSchema } from "@/schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import Link from "next/link";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductType>({ resolver: zodResolver(ProductFormSchema) });

  const submitForm: SubmitHandler<ProductType> = async (data) => {
    console.log(data);
  };
  return (
    <section>
      <p className="text-2xl font-semibold">New Product</p>
      <div className="mt-10">
        <div>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" placeholder="Enter product name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the product"
                className="min-h-[100px]"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="Enter price" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="collection">Collection</Label>
              <Input id="collection" placeholder="Enter collection (facultatif)" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" placeholder="Enter tags (separated by commas)" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Product Image</Label>
              <div className="flex items-center gap-2">
                <Input id="image" type="file" />
                <Button variant="outline" size="sm">
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="inventory">Inventory</Label>
              <Input
                id="inventory"
                type="number"
                placeholder="Enter quantity"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sku">SKU</Label>
              <Input id="sku" placeholder="Enter SKU" />
            </div>
          </form>
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
      </div>
    </section>
  );
}
