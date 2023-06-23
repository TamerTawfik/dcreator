
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

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
