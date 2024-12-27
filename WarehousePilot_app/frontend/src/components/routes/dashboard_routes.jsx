import { Dashboard, ManagerDashboard, AdminDashboard, AccountManagement  } from '../dashboard';
import Profile from '../dashboard/profile';
import KpiDashboard from "../dashboard/KpiDashboard"
import SKUStockLevels from "../dashboard/SKUStockLevels"




export const dashboard_routes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/manager_dashboard', element: <ManagerDashboard /> },
  { path: '/admin_dashboard', element: <AdminDashboard /> },
  { path: '/account_management', element: <AccountManagement /> },
  { path: '/profile', element: <Profile /> },
  { path: '/kpi', element: <KpiDashboard /> },
  { path: '/SKUStockLevels', element: <SKUStockLevels/> },

  

];
