import { DashboardHeader } from "@/components/dashboard/header"
import { CategoryCreateButton } from "@/components/dashboard/category-create-button"
import { CategoryItem } from "@/components/dashboard/category-item"
import { DashboardShell } from "@/components/dashboard/shell"

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
