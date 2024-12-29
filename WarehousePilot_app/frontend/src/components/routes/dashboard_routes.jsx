import { Dashboard, ManagerDashboard, AdminDashboard, AccountManagement, ChangePassword  } from '../dashboard';
import Profile from '../dashboard/profile';
import KpiDashboard from "../dashboard/KpiDashboard"
import Component from '../inventory-stock/App'; 
import ManageUsersPage from '../admin_manage_users/ManageUsersPage';
import AddUsersDashboard from '../dashboard/AddUsersDashboard';


export const dashboard_routes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/manager_dashboard', element: <ManagerDashboard /> },
  { path: '/admin_dashboard', element: <AdminDashboard /> },
  { path: '/admin_dashboard/manage_users', element: <ManageUsersPage /> },
  { path: '/account_management', element: <AccountManagement /> },
  { path: '/profile', element: <Profile /> },
  { path: '/kpi', element: <KpiDashboard /> },
  { path: '/change_password', element: <ChangePassword /> },
  { path: '/inventory-stock', element: <Component /> },
  {path: '/admin_dashboard/add_users', element: <AddUsersDashboard />},
];