import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Products",
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
    },
  ],
  sidebarNav: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Products",
      href: "/dashboard/products",
      icon: "post",
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
      icon: "category",
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
