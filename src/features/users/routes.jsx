import UserPage from "./pages/UserPage";

const userRoutes = [
    {
        path: "/user",
        element: <UserPage />,
        handle: {
            title: "Users",
        }
    }
];

export default userRoutes;