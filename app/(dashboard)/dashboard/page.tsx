
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"

export const metadata = {
  title: "Dashboard",
  description: "Overview.",
}

export default async function OrdersPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Overview"
        text="Overview Dashboard."
      />
      <div className="grid gap-8">
        
      </div>
    </DashboardShell>
  )
}
