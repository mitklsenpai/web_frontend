import MetricCard from "../components/MetricCard";
import RecentActivity from "../components/RecentActivity";
import AttentionTrendCard from "../components/AttentionTrendCard";
import DeviceCard from "../components/DeviceCard";
import useDashboard from "../hooks/useDashboard";
import { Box, Grid } from "@mui/material";
import { ChipStatus } from "@/components/common";
import { getStatusColor } from "../../../utils/statusColorUtils"

const calirationThreshholds = [{
    "success": 90,
    "warning": 80,
}]

function DashboardPage() {

    const {
        dashboard,
        loading,
        activities
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
                        value={dashboard.totalSessions}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <MetricCard
                        title="Attention"
                        value={`${dashboard.attentionRate}%`}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <MetricCard
                        title="Calibration"
                        value={`${dashboard.calibrationAccuracy}%`}
                        color={() => 
                            getStatusColor(dashboard.calibrationAccuracy, calirationThreshholds)
                        }
                        children={<ChipStatus title="Offline"/>}
                    />

                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <MetricCard
                        title="Device"
                        value={dashboard.activeDevices}
                        children={<ChipStatus title="Online"/>}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 9 }}>
                    <AttentionTrendCard />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <DeviceCard />
                </Grid>

                <Grid size={{ xs: 12, md: 12 }}>
                    <RecentActivity activities={activities} />
                </Grid>

            </Grid>

        </Box>
    );
}

export default DashboardPage;