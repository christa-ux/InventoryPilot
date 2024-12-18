import { Dashboard, ManagerDashboard, AdminDashboard, AccountManagement  } from '../dashboard';
import Profile from '../dashboard/profile';


export const dashboard_routes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/manager_dashboard', element: <ManagerDashboard /> },
  { path: '/admin_dashboard', element: <AdminDashboard /> },
  { path: '/account_management', element: <AccountManagement /> },
  { path: '/profile', element: <Profile /> }
];