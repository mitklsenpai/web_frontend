import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CalibrationProcess() {
    const navigate = useNavigate();
    return (
        <Box sx={{
                p: 0.5,
            }}
        >
            
            <Button
                variant="contained"
                size="large"
                sx={{ 
                    mb: 2, ml: "40%", 
                    width: "20%",
                    bgcolor: "primary.main",
                    color: "text.light"
                }}
                onClick={ () => { 
                    navigate("/calibration/result") 
                }}
            >
                    Calibration Done
            </Button>

            <Button
                variant="contained"
                size="large"
                sx={{ 
                    mb: 2, ml: "40%", 
                    width: "20%",
                    bgcolor: "error.main",
                    color: "text.light"
                }}
                onClick={ () => { 
                    navigate("/calibration/overview") 
                }}
            >
                Back
            </Button>

        </Box>
    )
}

export default CalibrationProcess;