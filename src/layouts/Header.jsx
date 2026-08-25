import {
    AppBar,
    Toolbar,
    Box
} from "@mui/material";

import PageHeader from "./PageHeader";
import UserMenu from "./UserMenu";

export default function Header({ title }) {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                bgcolor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
                height: 50
            }}
        >
            <Toolbar>
                <PageHeader title = {title} />

                <Box sx={{ flexGrow: 1 }} />

                <UserMenu />
            </Toolbar>
        </AppBar>
    );
}