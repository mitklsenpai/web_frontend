import {
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";

function RecentActivity({ activities }) {
    return (
        <Card
            sx={{
                p: 2,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider"
            }}
        >

            <CardContent sx={{ p: 0 }}>

                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    Recent Activity
                </Typography>


                <Box mt={2}>

                    <Box mb={2}>
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

                </Box>

            </CardContent>

        </Card>
    );
}

export default RecentActivity;