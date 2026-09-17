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
    
                <Typography variant="body1" >
                    Device Model: ESP 3200
                </Typography>

                <Typography variant="body1" >
                    Current FPS: 30
                </Typography>

                <Stack direction="row" spacing={0.5}>
                    <Typography variant="body1">
                        Status:
                    </Typography>
                    <Chip
                        label="Connected"
                        size="small"
                        variant="outlined"
                        sx={{
                            color: "success.main",
                            borderColor: "success.main"
                        }}
                    />
                </Stack>

            </Stack>
        </Card>
    )
}