import { DashboardHeader } from "@/components/header"
import { CategoryCreateButton } from "@/components/category-create-button"
import { CategoryItem } from "@/components/category-item"
import { DashboardShell } from "@/components/shell"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Categories" text="Create and manage categories.">
        <CategoryCreateButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <CategoryItem.Skeleton />
        <CategoryItem.Skeleton />
        <CategoryItem.Skeleton />
        <CategoryItem.Skeleton />
        <CategoryItem.Skeleton />
      </div>
    </DashboardShell>
  )
}
