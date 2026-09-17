import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Box,
    Stack,
} from "@mui/material";

export default function TrackingConfiguration({ configuration }) {

    const [formData, setFormData] = useState(configuration);

    useEffect(() => {
        setFormData(configuration);
    }, [configuration]);

    return (
        <Card sx = {{
                border: "1px solid",
                borderColor: "divider",
                height: "110%"
            }}
        >
            <CardContent>
                <Stack spacing={3}>

                    {/* Header */}
                    <Box>
                        <Typography 
                            variant="h4" 
                            sx = {{ color: "text.main" }}
                        >   
                            Eye Tracking Configuration
                        </Typography>

                        <Typography
                            variant="body2"
                            sx = {{ color: "text.secondary" }}
                        >
                            View your personal tracking configuration
                        </Typography>
                    </Box>

                    {/* Configuration */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1fr 1fr",
                            },
                            gap: 2,
                            "& .MuiTextField-root": {
                                width: "90%",
                                ml: 4
                            },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 2,

                                "& fieldset": {
                                    borderColor: "divider",
                                },

                                "&:hover fieldset": {
                                    borderColor: "primary.main",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "primary.main",
                                },
                            },
                        }}
                    >

                        <TextField
                            label="Device Model"
                            name="device_model"
                            value={formData?.device_model || ""}
                            focused
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />

                        <TextField
                            label="Calibration Model"
                            name="calibration_model"
                            value={formData?.calibration_model || ""}
                            focused
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />

                        <TextField
                            label="Device Code"
                            name="device_code"
                            value={formData?.device_code || ""}
                            focused
                        />

                        <TextField
                            label="Calibration Type"
                            name="caibration_type"
                            value={formData?.caibration_type || ""}
                            focused
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />

                        <TextField
                            label="Status"
                            name="status"
                            value={formData?.calibration_status || ""}
                            focused
                        />

                        <TextField
                            label="Calibration Accuracy"
                            name="accuracy"
                            value={formData?.calibration_accuracy || ""}
                            focused
                        />

                    </Box>

                </Stack>
            </CardContent>
        </Card>
    );
}