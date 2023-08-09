import { CardSkeleton } from "@/components/dashboard/card-skeleton"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"

export default function DashboardOrdersLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Orders"
        text="Manage orders and your payments."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
