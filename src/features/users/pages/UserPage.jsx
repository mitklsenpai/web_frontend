import useUsers from "../hooks/useUsers";
import { Box, Typography, Grid } from "@mui/material";
import MetricCard from "../components/MetricCard";

function UserPage() {
    const {
        users,
        loading
    } = useUsers();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Box>
            <Grid container spacing={3}></Grid>

                <Grid size={{ xs: 12, md: 1.5 }}>
                    <MetricCard
                        title="Users"
                        value={users.totalUsers}
                    />
                </Grid>
        </Box>
    )
}

export default UserPage;