import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Box,
    Stack,
} from "@mui/material";

export default function ProfileCard({ user, onSave }) {
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState(user);

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setFormData(user);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setFormData(user);
        setIsEditing(false);
    };

    const handleSave = async () => {
        await onSave(formData);
        setIsEditing(false);
    };

    return (
        <Card sx = {{
                height: "100%",
                border: "1px solid",
                borderColor: "divider"
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
                            Personal Information
                        </Typography>

                        <Typography
                            variant="body2"
                            sx = {{ color: "text.secondary" }}
                        >
                            Manage your personal information
                        </Typography>
                    </Box>

                    {/* Information */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1fr 1fr",
                            },
                            gap: 2,
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
                            label="Full Name"
                            name="fullName"
                            value={formData?.fullName || ""}
                            onChange={handleChange}
                            fullWidth
                            focused
                            slotProps={{
                                input: {
                                    readOnly: !isEditing,
                                },
                            }}
                        />

                        <TextField
                            label="Date of Birth"
                            name="birth"
                            value={formData?.birth || ""}
                            onChange={handleChange}
                            fullWidth
                            focused
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />

                        <TextField
                            label="Gender"
                            name="gender"
                            value={formData?.gender || ""}
                            fullWidth
                            focused
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />

                        <TextField
                            label="Country / Region"
                            name="country"
                            value={formData?.country || ""}
                            fullWidth
                            focused
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />

                        <TextField
                            label="Email"
                            name="email"
                            value={formData?.email || ""}
                            onChange={handleChange}
                            fullWidth
                            focused
                            slotProps={{
                                input: {
                                    readOnly: !isEditing,
                                },
                            }}
                        />

                        <TextField
                            label="Phone"
                            name="phone"
                            value={formData?.phone || ""}
                            onChange={handleChange}
                            fullWidth
                            focused
                            slotProps={{
                                input: {
                                    readOnly: !isEditing,
                                },
                            }}
                        />

                    </Box>

                    {/* Actions */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 1,
                        }}
                    >
                        {!isEditing ? (
                            <Button
                                variant="contained"
                                onClick={handleEdit}
                            >
                                Edit
                            </Button>
                        ) : (
                            <>
                                <Button
                                    variant="contained"
                                    onClick={handleCancel}
                                    sx = {{bgcolor: "error.main"}}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant="contained"
                                    onClick={handleSave}
                                    sx = {{bgcolor: "success.main"}}
                                >
                                    Save
                                </Button>
                            </>
                        )}
                    </Box>

                </Stack>
            </CardContent>
        </Card>
    );
}