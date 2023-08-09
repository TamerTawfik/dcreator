import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/dashboard/empty-placeholder"
import { DashboardHeader } from "@/components/dashboard/header"
import { CategoryCreateButton } from "@/components/dashboard/category-create-button"
import { CategoryItem } from "@/components/dashboard/category-item"
import { DashboardShell } from "@/components/dashboard/shell"

export const metadata = {
  title: "Categories",
  description: "Create and manage categories.",
}

export default async function DashboardPage() {
  const user: any = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/")
  }

  const categories = await db.category.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Categories" text="Create and manage categories.">
        <CategoryCreateButton />
      </DashboardHeader>
      <div>
        {categories?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {categories.map((category: any) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="category" />
            <EmptyPlaceholder.Title>No categories created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any categories yet. Start creating content.
            </EmptyPlaceholder.Description>
            <CategoryCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
