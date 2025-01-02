import React from 'react';
import { Icon } from "@iconify/react";

const sidebarItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="solar:home-2-linear" />,
  },
  {
    name: 'KPI',
    path: '/kpi',
    icon: <Icon icon="solar:chart-outline" />,
  },
  {
    name: 'Requests',
    path: '#',
    icon: <Icon icon="solar:clipboard-list-linear" />,
  },
  {
    name: 'Production Plan',
    path: '#',
    icon: <Icon icon="solar:calendar-outline" />,
  },
  {
    name: 'Shop Floor',
    path: '#',
    icon: <Icon icon="solar:bill-list-outline" />,
  },
  {
    name: 'Inventory',
    path: '/inventory-stock',
    icon: <Icon icon="solar:box-outline" />,
  },
  {
    name: 'Account Management',
    path: '/account_management',
    icon: <Icon icon="solar:user-outline" />,
  },
];

export default sidebarItems;

