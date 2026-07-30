import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import { dashboardRoutes } from "../features/dashboard";
import { userRoutes } from "../features/users";

const router = createBrowserRouter([
    {
        element: <AdminLayout />,
        children: [
            ...dashboardRoutes,
            ...userRoutes
            // ...other feature routes can be added here
        ]
    }
]);

export default router;