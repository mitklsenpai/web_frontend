import UserPage from "./pages/UserPage";

const userRoutes = [
    {
        path: "/user",
        element: <UserPage />,
        handle: {
            title: "Users",
            nav: { label: "Users" }
        }
    }
];

export default userRoutes;