import {
    Breadcrumbs,
    Link,
    Typography,
    Box
} from "@mui/material";

export default function PageHeader({ title }) {
    return (
        <Box ml={3}>
            <Typography variant="h5">
                {title}
            </Typography>

            <Breadcrumbs>

                {/* 
                {<Link underline="hover" heref="/user">
                    Users
                </Link>}
                
                Add heref + route when user click on link -> navigate to page
                */}

            </Breadcrumbs>
        </Box>
    );
}