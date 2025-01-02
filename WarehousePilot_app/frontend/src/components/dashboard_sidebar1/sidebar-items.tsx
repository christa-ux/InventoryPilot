import {Icon} from "@iconify/react";

import {type SidebarItem} from "./sidebar";

export const items: SidebarItem[] = [
  {
    key: "dashboard",
    href: "/dashboard",
    icon: "solar:home-2-linear",
    title: "Dashboard",
  },
  {
    key: "kpi",
    href: "/kpi", // Ensure this href matches the route path
    icon: "solar:chart-outline",
    title: "KPI",
  },
  {
    key: "requests",
    href: "#",
    icon: "solar:clipboard-list-linear",
    title: "Requests",
  },
  {
    key: "production_plan",
    href: "#",
    icon: "solar:calendar-outline",
    title: "Production Plan",
  },
  {
    key: "shop_floor",
    href: "#",
    icon: "solar:bill-list-outline",
    title: "Shop Floor",
  },
  {
    key: "inventory",
    href: "/inventory-stock",
    icon: "solar:box-outline",
    title: "Inventory",
  },
  {
    key: "account_management",
    href: "/account_management",
    icon: "solar:user-outline",
    title: "Account Management",
  },
];

