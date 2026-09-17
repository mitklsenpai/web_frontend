import DashboardPage from "./pages/DashboardPage";

const dashboardRoutes = [
    {
        path: "/",
        element: <DashboardPage />,
        handle: {
            title: "Dashboard",
            nav: { label: "Dashboard" }
        }
    }
];

export default dashboardRoutes;