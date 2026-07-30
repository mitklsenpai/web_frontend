import { useNavigate } from "react-router-dom";
import { Drawer, Toolbar, List, ListItemButton, ListItemText} from "@mui/material";
import Logo from "./Logo";

const drawerWidth = 220;

export default function Sidebar() {
    const navigate = useNavigate();

    const menuItems = [
        { label: "Dashboard", path: "/" },
        { label: "Users", path: "/user" },
    ];

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
            
            <Logo flexGrow={2} />

            <List>

                {menuItems.map((item) => (
                    <ListItemButton onClick = {() => navigate(item.path)} key={item.label}>

                        <ListItemText
                            primary={item.label}
                        />

                    </ListItemButton>
                ))}

            </List>

        </Drawer>
    );
}