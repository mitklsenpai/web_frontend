import { Stack, Box, Card, Chip, Button, Typography } from "@mui/material"

export default function CurrentCard() {
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
                    Model: CAL-001 
                </Typography>

                <Typography variant="body1" >
                    Accuracy:    
                    <Box 
                        component="span" 
                        sx={{ 
                            color: "success.main",
                            ml: 0.5
                        }}
                    >
                        95.9%
                    </Box>
                </Typography>

                <Typography variant="body1" >
                    Device: DEV-001
                </Typography>

                <Typography variant="body1" >
                    Created At: 22/08/2026
                </Typography>

                <Typography variant="body1">
                    Status: {
                        <Chip
                            label= "Ready"
                            size="small"
                            color={"success"} variant="outlined"
                        />
                    }
                </Typography>

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
            >
                Start Calibration
            </Button>

        </Card>
    )
}