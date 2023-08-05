import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImage } from '@/components/grid-tile-image';
import { Gallery } from '@/components/gallery';
// import { ProductDescription } from 'components/product/product-description';
import Link from 'next/link';
import { db } from "@/lib/db"


export const runtime = 'edge';


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
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images.map((image: any) => ({
                src: image.url,
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            {/* <ProductDescription product={product} /> */}
          </div>
        </div>
        {/* <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense> */}
      </div>
    </>
  );
}

// async function RelatedProducts({ id }: { id: string }) {
//   const relatedProducts: any = [];

//   if (!relatedProducts.length) return null;

//   return (
//     <div className="py-8">
//       <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
//       <ul className="flex w-full gap-4 overflow-x-auto pt-1">
//         {relatedProducts.map((product) => (
//           <li
//             key={product.handle}
//             className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
//           >
//             <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
//               <GridTileImage
//                 alt={product.title}
//                 src={product.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }