import useUsers from "../hooks/useUsers";
import AvatarCard from "../components/AvatarCard";
import ProfileCard from "../components/ProfileCard";
import TrackingConfiguration from "../components/TrackingConfiguration";  

import { Box, Grid } from "@mui/material";

function UserPage() {
    const {
        user,
        configuration,
        loading,
        saveUser,
    } = useUsers();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <Box sx = {{
                p : 2,
            }}
        >

            <Grid container spacing={3}>

                <Grid 
                    size={{ xs: 12, md: 4 }}
                >
                    <AvatarCard />
                </Grid>

                <Grid 
                    size={{ xs: 12, md: 8 }}
                >
                    <ProfileCard
                        user={user}
                        onSave={saveUser}
                    />
                </Grid>

                <Grid 
                    size={{ xs: 12, md: 12 }}
                    sx={{ mt: 5 }}
                >
                    <TrackingConfiguration
                        configuration={configuration}
                    />
                </Grid>

            </Grid>

        </Box>
    )
}

export default UserPage;