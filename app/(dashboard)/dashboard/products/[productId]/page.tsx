import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

import { ProductForm } from "@/components/dashboard/product-form";

const ProductPage = async ({
  params
}: {
  params: { productId: string }
}) => {
  const user = await getCurrentUser()

  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
      files: true,
    }
  });

  const categories = await db.category.findMany({
    where: {
      //@ts-ignore
      authorId: user?.id,
    },
  });

  
  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm 
          categories={categories} 
          initialData={product}
        />
      </div>
    </div>
  );
}

export default ProductPage;
