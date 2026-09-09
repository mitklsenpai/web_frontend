import { Card, Stack, Typography, Chip } from '@mui/material'

export default function DeviceCard () {
    return (
        <Card sx={{
                border: "1px solid",
                borderColor: "divider",
                height: "100%"
            }}    
        >
            <Typography variant="h3" gutterBottom sx = {{ p: 3, mb: 5}}>
                Current Device
            </Typography>

            <Stack 
                spacing={5} 
                sx = {{ px: 3, color: "text.light" }}
            >
    
                <Typography variant="body1" gutterBottom>
                    Device Model: ESP 3200
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Current FPS: 30
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Status: {
                        <Chip
                            label= "Connected"
                            size="small"
                            color={"success"} variant="outlined"
                        />
                    }
                </Typography>

            </Stack>
        </Card>
    )
}