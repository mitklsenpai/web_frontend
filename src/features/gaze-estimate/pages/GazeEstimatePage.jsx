import { Box } from "@mui/material";
import GazeEstimateCard from "../components/GazeEstimateCard";

export default function GazeEstimatePage() {
    return (
        <Box
            sx={{
                p: 0.5
            }}
        >
            <GazeEstimateCard />
        </Box>
    );
}
