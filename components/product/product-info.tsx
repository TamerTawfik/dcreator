"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/product/currency";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";


export default function ProductInfo({ product }: { product: Product }) {

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Currency value={product?.price} />
        </div>
      </div>

      <Button disabled className="flex items-center gap-x-2">
        Add To Cart
        <ShoppingCart size={20} />
      </Button>
    </>
  );
}


