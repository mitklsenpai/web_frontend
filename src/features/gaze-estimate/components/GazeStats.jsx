import { Grid, Card, Typography } from "@mui/material";


export default function GazeStats({ gazeCoords, confidence, fps, status }) {
    const isStopping = status === "stopping";

    const displayX = isStopping ? "-" : gazeCoords.x;
    const displayY = isStopping ? "-" : gazeCoords.y;
    const displayConfidence = isStopping ? "-" : `${confidence}%`;
    const displayFps = fps;

    const stats = [
        {
            label: "Gaze X",
            value: displayX,
            color: "#38bdf8"
        },
        {
            label: "Gaze Y",
            value: displayY,
            color: "#38bdf8"
        },
        {
            label: "Confidence",
            value: displayConfidence,
            color: "#10b981"
        },
        {
            label: "FPS",
            value: displayFps,
            color: "#38bdf8"
        }
    ];

    return (
        <Grid container spacing={2} sx={{ my: 2 }}>
            {stats.map((stat) => (
                <Grid size={{ xs: 6, sm: 3 }} key={stat.label}>
                    <Card
                        sx={{
                            p: 2,
                            bgcolor: "#001e26",
                            border: "1px solid",
                            borderColor: "rgba(38, 139, 210, 0.2)",
                            borderRadius: 2,
                            textAlign: "center",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#839496",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                mb: 0.5
                            }}
                        >
                            {stat.label}
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                color: stat.color,
                                fontWeight: 700,
                                fontFamily: "monospace",
                                fontSize: "1.4rem"
                            }}
                        >
                            {stat.value}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
