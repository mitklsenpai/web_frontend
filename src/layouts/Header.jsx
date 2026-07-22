import {
    AppBar,
    Toolbar,
    Box
} from "@mui/material";

import PageHeader from "./PageHeader";
import UserMenu from "./UserMenu";

export default function Header() {
    return (
        <AppBar
            position="static"
            elevation={0}
            color="inherit"
        >
            <Toolbar>
                <PageHeader />

                <Box sx={{ flexGrow: 1 }} />

                <UserMenu />

            </Toolbar>
        </AppBar>
    );
}