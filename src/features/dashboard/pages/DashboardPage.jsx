import MetricCard from "../components/MetricCard";
import RecentActivity from "../components/RecentActivity";
import useDashboard from "../hooks/useDashboard";
import { Box, Typography, Grid } from "@mui/material";

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
                minHeight: "100vh",
                p: 0.5
            }}
        >

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 1.5 }}>
                    <MetricCard
                        title="Users"
                        value={dashboard.totalUsers}
                    />
                </Grid>


                <Grid size={{ xs: 12, md: 1.5 }}>
                    <MetricCard
                        title="Sessions"
                        value={dashboard.totalSessions}
                    />
                </Grid>


                <Grid size={{ xs: 12, md: 10 }}>
                    <RecentActivity
                        activities={dashboard}
                    />
                </Grid>

            </Grid>

        </Box>
    );
}

export default DashboardPage;