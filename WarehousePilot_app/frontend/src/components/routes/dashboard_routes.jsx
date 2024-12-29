import { Dashboard, ManagerDashboard, AdminDashboard, AccountManagement, ChangePassword  } from '../dashboard';
import Profile from '../dashboard/profile';
import KpiDashboard from "../dashboard/KpiDashboard"
import ManageUsersPage from '../admin_manage_users/ManageUsersPage';


export const dashboard_routes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/manager_dashboard', element: <ManagerDashboard /> },
  { path: '/admin_dashboard', element: <AdminDashboard /> },
  { path: '/admin_dashboard/manage_users', element: <ManageUsersPage /> },
  { path: '/account_management', element: <AccountManagement /> },
  { path: '/profile', element: <Profile /> },
  { path: '/kpi', element: <KpiDashboard /> },
  { path: '/change_password', element: <ChangePassword /> },
];