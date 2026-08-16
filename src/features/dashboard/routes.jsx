import DashboardPage from "./pages/DashboardPage";

const dashboardRoutes = [
    {
        path: "/",
        element: <DashboardPage />,
        handle: {
            title: "Dashboard",
        }
    }
];

export default dashboardRoutes;