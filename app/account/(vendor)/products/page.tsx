import React from "react";
import ProductList from "./_components/ProductList";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default async function Products() {
  return (
    <section>
      <div className="py-3 flex items-center justify-between">
        <Input
          placeholder="search"
          className="max-w-sm placeholder:capitalize"
        />
        <Link href={"./products/add_product"}>
          <Button variant={"outline"} className="flex gap-x-2 items-center">
            <PlusIcon size={20} />
            Add Product
          </Button>
        </Link>
      </div>
      <ProductList />
    </section>
  );
}
