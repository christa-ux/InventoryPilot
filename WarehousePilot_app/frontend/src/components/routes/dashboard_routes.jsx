import { Dashboard, ManagerDashboard, AdminDashboard, AccountManagement, ChangePassword  } from '../dashboard';
import Profile from '../dashboard/profile';
import KpiDashboard from "../dashboard/KpiDashboard"
import Staff from '../dashboard/StaffDashboard';
import AddStaff from '../dashboard/AddStaff';


export const dashboard_routes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/manager_dashboard', element: <ManagerDashboard /> },
  { path: '/admin_dashboard', element: <AdminDashboard /> },
  { path: '/account_management', element: <AccountManagement /> },
  { path: '/profile', element: <Profile /> },
  { path: '/kpi', element: <KpiDashboard /> },
  { path: '/change_password', element: <ChangePassword /> },
  { path: '/staff', element: <Staff /> },
  { path: '/add_staff', element: <AddStaff /> },

];