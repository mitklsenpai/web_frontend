import useUsers from "../hooks/useUsers";
import { Box, Typography, Avatar, Button, Grid, TextField, FormControl, InputLabel } from "@mui/material";
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
        <Box sx = {{
                minHeight: "100vh",
                p : 2, pl: 4
            }}
        >
            <Grid container spacing={3}>
                <Grid item sx = {{xs: 12, md: 12}}>
                    <Avatar sx = {{ width: 100, height: 100, color: "", bgcolor: ""}}>
                        
                    </Avatar>
                </Grid>

                <Grid item sx = {{xs: 12, md: 12, mt:4}}>
                    <Button variant="contained" size="medium" color="primary">
                        Upload an image
                    </Button>
                </Grid>
            </Grid>
                
                
            <Grid container 
                spacing={3} 
                sx = {{
                    mt: 7,
                    bgcolor: "background.default",
                }}
            >
                <Grid item 
                    size={{xs: 12, md: 3}}
                    sx = {{bgcolor: "background.paper"}}
                >
                    <TextField
                        fullWidth
                        label="Full name"
                        color="primary"
                    />
                </Grid>

                <Grid item 
                    size={{xs: 12, md: 4}}
                    sx = {{bgcolor: "background.paper"}}
                >
                    <TextField
                        fullWidth
                        label="Email"
                        color="primary"
                    />
                </Grid>
                
                <Grid item 
                    size={{xs: 12, md: 4}}
                    sx = {{bgcolor: "background.paper"}}
                >
                    <TextField
                        fullWidth
                        label="Address"
                        color="primary"
                    />
                </Grid>

            </Grid>
        </Box>
    )
}

export default UserPage;