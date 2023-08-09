import { DashboardHeader } from "@/components/dashboard/header"
import { ProductCreateButton } from "@/components/dashboard/product-create-button"
import { ProductItem } from "@/components/dashboard/product-item"
import { DashboardShell } from "@/components/dashboard/shell"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Products" text="Create and manage products.">
        <ProductCreateButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <ProductItem.Skeleton />
        <ProductItem.Skeleton />
        <ProductItem.Skeleton />
        <ProductItem.Skeleton />
        <ProductItem.Skeleton />
      </div>
    </DashboardShell>
  )
}
