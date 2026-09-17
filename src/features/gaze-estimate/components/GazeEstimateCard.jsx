import { Card, Typography, Divider } from "@mui/material";
import { useGazeEstimate } from "../hooks/useGazeEstimate";
import CameraFeed from "./CameraFeed";
import GazeStats from "./GazeStats";
import GazeControls from "./GazeControls";

export default function GazeEstimateCard() {
    const {
        status,
        gazeCoords,
        confidence,
        fps,
        remainingTime,
        feedWidth,
        feedHeight,
        handleStart,
        handlePause,
        handleStop
    } = useGazeEstimate();

    return (
        <Card
            sx={{
                p: { xs: 2, md: 2.5 },
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                width: "100%",
                minHeight: "calc(100vh - 85px)",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box"
            }}
        >
            {/* Card Title */}
            <Typography
                variant="h3"
                sx={{
                    color: "common.white",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    mb: 1.5
                }}
            >
                Gaze Estimate
            </Typography>

            <Divider sx={{ mb: 2.5, borderColor: "rgba(131, 148, 150, 0.2)" }} />

            {/* Camera Feed Area with Gaze Point */}
            <CameraFeed
                status={status}
                gazeCoords={gazeCoords}
                feedWidth={feedWidth}
                feedHeight={feedHeight}
            />

            {/* 4 Stat Cards: Gaze X, Gaze Y, Confidence, FPS */}
            <GazeStats
                gazeCoords={gazeCoords}
                confidence={confidence}
                fps={fps}
                status={status}
            />

            {/* Status Indicator and Control Buttons */}
            <GazeControls
                status={status}
                remainingTime={remainingTime}
                onStart={handleStart}
                onPause={handlePause}
                onStop={handleStop}
            />
        </Card>
    );
}
