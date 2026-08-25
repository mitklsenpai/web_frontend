import MetricCard from "../components/MetricCard";
import RecentActivity from "../components/RecentActivity";
import AttentionAlert from "../components/AttentionAlert"
import useDashboard from "../hooks/useDashboard";
import { Box, Typography, Grid } from "@mui/material";
import { ChipStatus } from "@/components/common";

function DashboardPage() {

    const {
        dashboard,
        loading
    } = useDashboard();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Box
            sx={{
                p: 0.5,
            }}
        >

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 3 }}>
                    <MetricCard
                        title="Sessions"
                        value={dashboard.totalUsers}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <MetricCard
                        title="Attention"
                        value={dashboard.totalSessions}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <MetricCard
                        title="Calibration"
                        value={dashboard.totalSessions}
                        children={<ChipStatus title="Ready"/>}
                    />

                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <MetricCard
                        title="Device"
                        value={dashboard.totalSessions}
                        children={<ChipStatus title="Online"/>}
                    />
                </Grid>

            </Grid>


            {/* <AttentionAlert/> */}

        </Box>
    );
}

export default DashboardPage;