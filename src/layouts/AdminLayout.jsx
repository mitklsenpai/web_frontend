import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

// Outlet matchs with routes defines in App.jsx

function AdminLayout() {
    console.log("AdminLayout rendered");
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh"
            }}
        >
            <Box sx={{ bgcolor: "lightblue" }}>
                <Sidebar />
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Box sx={{ bgcolor: "lightgreen" }}>
                    <Header />
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        p: 3,
                        bgcolor: "background.default",
                        overflow: "auto"
                    }}
                >
                    <Outlet />
                </Box>

            </Box>

        </Box>
    );
}

export default AdminLayout;