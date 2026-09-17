import { Box } from "@mui/material";
import ResultCard from "../components/result/ResultCard"
import useCalibration from "../hooks/useCalibration";

function CalibrationResult() {
    const {
        calibration,
        loading
    } = useCalibration();
    
    if (loading) {
        return <p> Loading... </p>
    }

    return (
        <Box sx={{
                p: 2
            }}
        >
            <ResultCard data={calibration.calibrationResult} />
        </Box>
    )
}

export default CalibrationResult;