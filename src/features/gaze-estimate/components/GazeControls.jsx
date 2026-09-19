import { Box, Typography, Button, Stack } from "@mui/material";

export default function GazeControls({
    status,
    remainingTime,
    onStart,
    onPause,
    onStop
}) {
    // Determine status configuration
    const statusConfig = {
        tracking: {
            label: "Tracking",
            color: "#10b981",
            dotColor: "#10b981"
        },
        pausing: {
            label: "Pausing",
            color: "#f59e0b",
            dotColor: "#f59e0b"
        },
        stopping: {
            label: "Stopping",
            color: "#ef4444",
            dotColor: "#ef4444"
        }
    };

    const currentStatus = statusConfig[status] || statusConfig.stopping;

    return (
        <Box sx={{ mt: 2 }}>
            {/* Status Line */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#839496",
                        fontWeight: 600,
                        fontSize: "0.95rem"
                    }}
                >
                    Status:
                </Typography>

                {/* Animated colored dot */}
                <Box
                    sx={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        bgcolor: currentStatus.dotColor,
                        boxShadow: `0 0 8px ${currentStatus.dotColor}`,
                        animation: status === "tracking" ? "statusBlink 1.5s infinite" : "none",
                        "@keyframes statusBlink": {
                            "0%, 100%": { opacity: 1 },
                            "50%": { opacity: 0.3 }
                        }
                    }}
                />

                <Typography
                    variant="body1"
                    sx={{
                        color: currentStatus.color,
                        fontWeight: 600,
                        fontSize: "0.95rem"
                    }}
                >
                    {currentStatus.label}
                </Typography>

                {/* Countdown display when tracking */}
                {status === "tracking" && (
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#839496",
                            fontFamily: "monospace",
                            fontSize: "0.85rem",
                            ml: 1
                        }}
                    >
                        ({remainingTime}s)
                    </Typography>
                )}
            </Box>

            {/* Action Buttons: [ Start ] [ Pause / Continue ] [ Stop ] */}
            <Stack direction="row" spacing={1.5}>
                <Button
                    variant="outlined"
                    onClick={onStart}
                    disabled={status === "pausing" || status === "tracking"}
                    sx={{
                        color: status === "tracking" ? "#ffffff" : "#38bdf8",
                        bgcolor: status === "tracking" ? "rgba(38, 139, 210, 0.3)" : "rgba(38, 139, 210, 0.05)",
                        borderColor: "#268bd2",
                        borderRadius: 1.5,
                        px: 2.5,
                        py: 0.6,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        fontFamily: "monospace",
                        "&:hover": {
                            borderColor: "#38bdf8",
                            bgcolor: "rgba(56, 189, 248, 0.2)"
                        },
                        "&.Mui-disabled": {
                            color: "rgba(131, 148, 150, 0.3)",
                            borderColor: "rgba(131, 148, 150, 0.2)"
                        }
                    }}
                >
                    [ Start ]
                </Button>

                <Button
                    variant="outlined"
                    onClick={status === "pausing" ? onStart : onPause}
                    disabled={status === "stopping"}
                    sx={{
                        color: status === "pausing" ? "#38bdf8" : (status === "tracking" ? "#38bdf8" : "rgba(131, 148, 150, 0.3)"),
                        bgcolor: status === "pausing" ? "rgba(56, 189, 248, 0.1)" : "rgba(38, 139, 210, 0.05)",
                        borderColor: status === "pausing" ? "#38bdf8" : "#268bd2",
                        borderRadius: 1.5,
                        px: 2.5,
                        py: 0.6,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        fontFamily: "monospace",
                        "&:hover": {
                            borderColor: "#38bdf8",
                            bgcolor: "rgba(56, 189, 248, 0.2)"
                        },
                        "&.Mui-disabled": {
                            color: "rgba(131, 148, 150, 0.3)",
                            borderColor: "rgba(131, 148, 150, 0.2)"
                        }
                    }}
                >
                    {status === "pausing" ? "[ Continue ]" : "[ Pause ]"}
                </Button>

                <Button
                    variant="outlined"
                    onClick={onStop}
                    sx={{
                        color: "#ef4444",
                        bgcolor: "rgba(239, 68, 68, 0.05)",
                        borderColor: "rgba(239, 68, 68, 0.5)",
                        borderRadius: 1.5,
                        px: 2.5,
                        py: 0.6,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        fontFamily: "monospace",
                        "&:hover": {
                            borderColor: "#ef4444",
                            bgcolor: "rgba(239, 68, 68, 0.2)"
                        }
                    }}
                >
                    [ Stop ]
                </Button>
            </Stack>
        </Box>
    );
}
