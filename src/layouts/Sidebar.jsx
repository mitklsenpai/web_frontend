import {
    Drawer,
    Toolbar,
    List,
    ListItemButton,
    ListItemText
} from "@mui/material";

import Logo from "./Logo";

const drawerWidth = 220;

const menus = [
    "Dashboard",
    "Users",
    "Roles",
    "Access Point",
    "Device"
];

export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            }}
        >
            <Toolbar />
            
            <Logo flexGrow={1} />

            <List>

                {menus.map((item) => (
                    <ListItemButton key={item}>

                        <ListItemText
                            primary={item}
                        />

                    </ListItemButton>
                ))}

            </List>

        </Drawer>
    );
}