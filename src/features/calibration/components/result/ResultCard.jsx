import { Card, Typography, Grid, Stack, Button } from "@mui/material"
import InfoCard from "./InfoCard"
import { getStatusColor } from "../../../../utils/statusColorUtils"
import { useNavigate } from "react-router-dom"

const threshholds = [{
    "success": 90,
    "warning": 80,
}]

const gazePath = "/"

function getCalibraitonStatus(value) {
    if (value == "Success") {
        return {
            "color": "success.main",
            "title": "Calibration Successful"
        }
    }
    return {
        "color": "error.main",
        "title": "Calibraiton Failed"
    }
}

export default function ResultCard({data}) {
    const navigate = useNavigate();

    const result = getCalibraitonStatus(data.status);
    const accuracy = data.accuracy

    return (
        <Card sx={{
                height: "100%",
                bgcolor: "transparent",
            }}    
        >
            <Stack>
                <Typography 
                    variant="h1" 
                    gutterBottom 
                    sx = {{ 
                        textAlign: "center",
                        color: result.color
                    }}
                >
                    {result.title}
                </Typography>

                <Typography
                    variant="h3" 
                    gutterBottom 
                    sx = {{ 
                        textAlign: "center",
                        color: "text.seco"
                    }}
                >
                    Create At: {data.createAt}
                </Typography>
            </Stack>

            <Grid 
                container spacing={3} 
                sx={{ mt: 10 }}
            > 
                <Grid size={{ xs: 12, md: 4 }}>
                    <InfoCard 
                        title={"Point Error"} 
                        value={`${data.pointError} ptx`}
                        color={"primary.light"}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <InfoCard 
                        title={"Accuracy"} 
                        value={`${accuracy}%`}
                        color={
                            getStatusColor(accuracy, threshholds)
                        }
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <InfoCard 
                        title={"Model"} 
                        value={data.model}
                        color={"primary.light"}
                    />
                </Grid>
            
                <Grid size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 2,
                            width: "20%",
                            bgcolor: "primary.main",
                            color: "text.light"
                        }}
                        onClick={() => navigate(gazePath)}
                    >
                        Start Gaze Estimate
                    </Button>
                </Grid>
            </Grid>
            
        </Card>
    )
}