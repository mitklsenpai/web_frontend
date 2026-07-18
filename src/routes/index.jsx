import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import { dashboardRoutes } from "../features/dashboard";

const router = createBrowserRouter([
    {
        element: <AdminLayout />,
        children: [
            ...dashboardRoutes
            // ...other feature routes can be added here
        ]
    }
]);

export default router;