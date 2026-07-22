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

                <Link underline="hover">
                    Users
                </Link>

                <Typography color="text.primary">
                    Detail
                </Typography>
            </Breadcrumbs>
        </Box>
    );
}