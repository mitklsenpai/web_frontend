import {
    Avatar,
    Box,
    IconButton
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

export default function UserMenu() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2
            }}
        >
            <IconButton>
                <NotificationsIcon />
            </IconButton>

            <Avatar>
                A
            </Avatar>
        </Box>
    );
}