import { Box } from "@mui/material";
import CurrentCard from "../components/overview/CurrentCard"
import useCalibration from "../hooks/useCalibration";

function CalibrationOverview() {
    const {
        calibration,
        loading
    } = useCalibration();

    if (loading) {
        return <p> Loading.... </p>
    }

    return (
        <Box sx={{
                p: 0.5,
            }}
        >
            <CurrentCard data={calibration.currentCalibration}/>

        </Box>
    )
}

export default CalibrationOverview;