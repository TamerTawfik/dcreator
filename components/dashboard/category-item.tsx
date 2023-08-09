import Link from "next/link"
import { Category } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { CategoryOperations } from "@/components/dashboard/category-operations"

interface CategoryItemProps {
  category: Pick<Category, "id" | "name" | "createdAt">
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/dashboard/categories/${category.id}`}
          className="font-semibold hover:underline"
        >
          {category.name}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(category.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <CategoryOperations category={{ id: category.id, name: category.name }} />
    </div>
  )
}

CategoryItem.Skeleton = function CategoryItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
