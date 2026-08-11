import {
    Breadcrumbs,
    Link,
    Typography,
    Box
} from "@mui/material";

export default function PageHeader() {
    return (
        <Box ml={3}>
            <Typography variant="h5">
                User Management
            </Typography>

            <Breadcrumbs>
                <Link underline="hover">
                    Dashboard
                </Link>

                {<Link underline="hover">
                    Users
                </Link>}

                {/* 
                {<Link underline="hover" heref="/user">
                    Users
                </Link>}
                
                Add heref + route when user click on link -> navigate to page
                */}


                <Typography color="text.primary">
                    Detail
                </Typography>
            </Breadcrumbs>
        </Box>
    );
}