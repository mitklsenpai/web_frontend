import { dashboardRoutes } from "@/features/dashboard";
import { userRoutes } from "@/features/users";

// ==============================|| ROUTES - CONFIG ||============================== //

// Central registry of all feature routes.
// Add new feature routes here — both the router and Sidebar consume this array.
const appRoutes = [
    ...dashboardRoutes,
    ...userRoutes
];

export default appRoutes;
