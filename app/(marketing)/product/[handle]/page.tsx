import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImage } from '@/components/grid-tile-image';
import ProductList from "@/components/ui/product-list";
import { Gallery } from '@/components/gallery';
import ProductInfo from 'components/product-info';
import Link from 'next/link';
import { db } from "@/lib/db"


export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await db.product.findUnique({
    where: {
      id: params.handle
    },
    include: {
      images: true,
      category: true,
    }
  });

  if (!product) return notFound();

  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg bg-white p-8 dark:bg-black md:p-12 lg:flex-row">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images.map((image: any) => ({
                src: image.url,
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6 ml-8">
            <ProductInfo product={product} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={product?.category?.id} />
        </Suspense>
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await db.product.findMany({
    where: {
      categoryId: id
    },
    include: {
      images: true,
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        <ProductList title="" items={relatedProducts} />
      </ul>
    </div>
  );
}