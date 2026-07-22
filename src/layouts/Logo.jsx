import { Box, Typography } from "@mui/material";

export default function Logo() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1
            }}
        >
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: "primary.main"
                }}
            />

            <Typography
                variant="h6"
                fontWeight={700}
            >
                EyeTrax
            </Typography>
        </Box>
    );
}