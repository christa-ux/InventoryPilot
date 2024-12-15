//import your routes here

import { dashboard_routes } from './dashboard_routes';
import { authentication_routes } from './authentication_routes';

const routes = [...authentication_routes, ...dashboard_routes];
export default routes;