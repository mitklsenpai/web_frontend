import { Box, Typography } from "@mui/material";

export default function CameraFeed({ status, gazeCoords, feedWidth, feedHeight }) {
    // Only show gaze point when status is tracking or pausing; hidden when stopping
    const isGazePointVisible = status !== "stopping";

    const posXPercent = (gazeCoords.x / feedWidth) * 100;
    const posYPercent = (gazeCoords.y / feedHeight) * 100;

    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: 320, sm: 400, md: 480, lg: 520 },
                minHeight: 320,
                flex: 1,
                bgcolor: "#001820",
                border: "1px solid",
                borderColor: "rgba(38, 139, 210, 0.25)",
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                p: 2,
                userSelect: "none"
            }}
        >
            {/* Camera Feed Label */}
            <Typography
                variant="caption"
                sx={{
                    fontFamily: "monospace",
                    color: "#586e75",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: 1.5
                }}
            >
                CAMERA FEED
            </Typography>

            {/* Red Gaze Point */}
            {isGazePointVisible && (
                <Box
                    sx={{
                        position: "absolute",
                        left: `${posXPercent}%`,
                        top: `${posYPercent}%`,
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: status === "tracking"
                            ? "left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"
                            : "none",
                        pointerEvents: "none"
                    }}
                >
                    {/* Glowing Red Dot */}
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: "#ef4444",
                            boxShadow: "0 0 12px 3px rgba(239, 68, 68, 0.9), 0 0 20px 6px rgba(220, 38, 38, 0.4)",
                            animation: status === "tracking" ? "redPulse 1.2s infinite" : "none",
                            "@keyframes redPulse": {
                                "0%, 100%": {
                                    transform: "scale(1)",
                                    opacity: 1
                                },
                                "50%": {
                                    transform: "scale(1.2)",
                                    opacity: 0.85
                                }
                            }
                        }}
                    />

                    {/* Label Gaze Point */}
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 1,
                            color: "#ef4444",
                            fontFamily: "monospace",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            whiteSpace: "nowrap"
                        }}
                    >
                        Gaze Point
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
