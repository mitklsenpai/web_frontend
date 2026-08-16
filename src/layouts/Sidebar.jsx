import { useNavigate } from "react-router-dom";
import { Drawer, Toolbar, List, ListItemButton, ListItemText} from "@mui/material";
import Logo from "./Logo";

const drawerWidth = 180;

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
            {/* <Toolbar /> */}
            
            <Logo />

            <List sx={{ mt: 1.3 }}>
                {menuItems.map((item) => (
                    <ListItemButton 
                        onClick = {() => navigate(item.path)} key={item.label}
                        sx = {{
                            borderRadius: 3,
                            ml: 2,
                            mr: 2,
                            "&:hover": {
                                bgcolor: "primary.dark"
                            },
                        
                        }}
                    >
                        
                        <ListItemText
                            primary={item.label}
                        />

                    </ListItemButton>
                ))}
            </List>

        </Drawer>
    );
}