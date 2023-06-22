import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { ProductCreateButton } from "@/components/product-create-button"
import { ProductItem } from "@/components/product-item"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user: any = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/")
  }

  const products = await db.product.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      name: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <ProductCreateButton />
      </DashboardHeader>
      <div>
        {products?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {products.map((product: any) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No products created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any products yet. Start creating content.
            </EmptyPlaceholder.Description>
            <ProductCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
