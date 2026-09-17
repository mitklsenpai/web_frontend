import { useNavigate } from "react-router-dom";
import { Stack, Box, Card, Chip, Button, Typography } from "@mui/material"
import { getStatusColor } from "../../../../utils/statusColorUtils"
import { values } from "lodash-es";



const processPath = "/calibration/process"
const threshholds = [{
    "success": 90,
    "warning": 80,
}]

function getChipColor (value) {
    return (
        value == "Success" ? 
        "success.main" : "error.main"
    )
}

export default function CurrentCard({data}) {
    const navigate = useNavigate();
    let status = data.status;
    let accuracy = data.accuracy;

    return (
        <Card sx={{
                border: "1px solid",
                borderColor: "divider",
                height: "100%"
            }}    
        >
            <Typography 
                variant="h3" 
                gutterBottom 
                sx = {{ 
                    p: 2, mb: 2,
                    color: "primary.main"
                }}
            >
                Current Calibration
            </Typography>

            <Stack 
                spacing={2} 
                sx = {{ mb: 2, px: 3, color: "text.light" }}
            >
    
                <Typography variant="body1" >
                    Model: {data.model}
                </Typography>

                <Typography variant="body1" >
                    Accuracy:    
                    <Box 
                        component="span" 
                        sx={{ 
                            color: getStatusColor(accuracy, threshholds),
                            ml: 0.5
                        }}
                    >
                        {accuracy}%
                    </Box>
                </Typography>

                <Typography variant="body1" >
                    Device: {data.device}
                </Typography>

                <Typography variant="body1" >
                    Created At: {data.createAt}
                </Typography>

                <Stack direction="row" spacing={0.5}>
                    <Typography variant="body1">
                        Status:
                    </Typography>
                    <Chip
                        label={status}
                        size="small"
                        variant="outlined"
                        sx={{
                            color: getChipColor(status),
                            borderColor: getChipColor(status),
                        }}
                    />
                </Stack>

            </Stack>

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
                    navigate(processPath) 
                }}
            >
                 Start Calibration 
            </Button>

        </Card>
    )
}