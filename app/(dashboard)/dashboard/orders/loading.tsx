import { CardSkeleton } from "@/components/card-skeleton"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

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
