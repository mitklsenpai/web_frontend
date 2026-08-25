import { Avatar, Box, IconButton, Typography } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

export default function UserMenu() {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2
            }}
        >
            <IconButton sx={{ color: "primary.main" }}>
                <NotificationsIcon  />
            </IconButton>

            <Avatar sx={{ bgcolor: "primary.dark" }}>
                <Typography variant="h3" sx = {{ color: "text.dark" }}>
                    A
                </Typography>
            </Avatar>
        </Box>
    );
}