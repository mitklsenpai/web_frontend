import { dashboardRoutes } from "@/features/dashboard";
import { userRoutes } from "@/features/users";
import { calibrationRoutes } from "@/features/calibration";
import { gazeEstimateRoutes } from "@/features/gaze-estimate";

// ==============================|| ROUTES - CONFIG ||============================== //

// Central registry of all feature routes.
// Add new feature routes here — both the router and Sidebar consume this array.
const appRoutes = [
    ...dashboardRoutes,
    ...userRoutes,
    ...calibrationRoutes,
    ...gazeEstimateRoutes
];

export default appRoutes;

