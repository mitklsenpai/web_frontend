import { Box, Typography } from "@mui/material";

export default function Logo() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-center",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "20px",
                gap: 2
            }}
        >
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "20%",
                    bgcolor: "primary.main"
                }}
            />

            <Typography
                variant="h4"
                color="text.secondary"
                sx={{
                    fontWeight: 600
                }}
            >
                Eye Tracker
            </Typography>
        </Box>
    );
}