import { Outlet, useMatches } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

// Outlet matchs with routes defines in App.jsx

function AdminLayout() {
    const matches = useMatches();

    const title = matches.at(-1)?.handle?.title ?? "No thing to show";

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                bgcolor: "background.default"
            }}
        >
            <Box sx={{ bgcolor: "primary.main", color: "common.white" }}>
                <Sidebar />
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Box sx={{ bgcolor: "background.paper" }}>
                    <Header title={title} />
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 1.5, md: 2 },
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