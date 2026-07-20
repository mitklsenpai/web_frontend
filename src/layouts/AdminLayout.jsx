import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// Outlet matchs with routes defines in App.jsx

function AdminLayout() {
    return (
        // <main style={{ padding: "24px" }}>
        //     <Outlet />
        // </main>
        <Box
            sx={{
                minHeight:"100vh",
                bgcolor:"background.default",
                p:3
            }}
        >
            <Outlet/>
        </Box>
    );
}

export default AdminLayout;