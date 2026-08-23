import { Box, Typography } from "@mui/material";

function Status({ status = "Online" }) {
    const isOnline = status === "Online" || "Active";

    return (
        <Box sx = {{display: "flex", alignItems: "center", gap: 1}}>
            
            <Box
                sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: isOnline ? "success.main" : "error.main",
                    animation: isOnline
                        ? "blink 1.5s infinite"
                        : "none",

                    "@keyframes blink": {
                        "0%, 100%": {
                            opacity: 1,
                        },
                        "50%": {
                            opacity: 0.2,
                        },
                    },
                }}
            />

            <Typography variant="body2" sx={{color: "text.secondary"}}>
                {status}
            </Typography>
        
        </Box>
    );
}

export default Status;