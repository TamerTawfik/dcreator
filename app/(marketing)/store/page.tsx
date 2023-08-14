import ProductList from "@/components/product/product-list";
import Container from "@/components/product/container";
import { db } from "@/lib/db"

export const revalidate = 0;

const StorePage = async () => {
    const products = await db.product.findMany({
        include: {
          images: true,
          category: true,
        },
        orderBy: {
          createdAt: 'desc',
        }
      });

  return (
    <Container>
      <div className="space-y-10 pb-10 pt-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Digital Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default StorePage;
