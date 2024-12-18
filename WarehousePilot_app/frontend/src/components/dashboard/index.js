export { default as Dashboard } from './Dashboard';
export { default as AdminDashboard } from './AdminDashboard';
export { default as ManagerDashboard } from './ManagerDashboard';
export { default as AccountManagement } from './AccountManagement';
import KpiDashboard from "./KpiDashboard";

const routes = [
  { path: "/kpi", component: KpiDashboard },
];

export default routes;