import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack
} from "@mui/material";

function RecentActivity({ activities }) {
    return (
        <Card
            sx={{
                p: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider"
            }}
        >
            <CardContent sx={{ p: 0 }}>
                <Stack spacing={2} mt={3}>
                    <Box>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            Tổng số người dùng
                        </Typography>

                        <Typography
                            variant="h3"
                            color="primary.main"
                        >
                            {activities?.totalUsers ?? 0}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            Tổng số phiên
                        </Typography>

                        <Typography
                            variant="h3"
                            color="secondary.main"
                        >
                            {activities?.totalSessions ?? 0}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default RecentActivity;