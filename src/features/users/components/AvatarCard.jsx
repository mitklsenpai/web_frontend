import {
    Card,
    CardContent,
    Grid,
    Avatar,
    Typography,
    Stack,
    Box,
    Divider
} from "@mui/material";

import Status from "./Status";

function AvatarCard() {
    return (
        <Card sx={{
                height: "100%",
                p: 2,
                border: "1px solid",
                borderColor: "divider"
            }}
        >

            {/* Avatar */}

            <Avatar sx={{
                    width: 200,
                    height: 200,
                    ml: 19
                }}
            >
                
            </Avatar>

            <Typography 
                variant="h3" 
                sx={{
                    color: "text.secondary", 
                    mt: 4,
                    mb: 1
                }}
            >
                Nguyễn Trần Quang Tuyển
            </Typography>
            
            <Status status="Active" />

            <Status status="Calibration ready" />
            
            <Status status="Device online" />
            
        </Card>
    );
}

export default AvatarCard;