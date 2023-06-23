
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Orders",
  description: "Manage orders and your payments.",
}

export default async function OrdersPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-8">
        
      </div>
    </DashboardShell>
  )
}
