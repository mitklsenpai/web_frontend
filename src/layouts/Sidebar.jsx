import { useLocation, useNavigate } from "react-router-dom";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import Logo from "./Logo";
import { getNavItems } from "@/routes/nav";
import appRoutes from "@/routes/config";

const drawerWidth = 180;

const menuItems = getNavItems(appRoutes);

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

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
            <Logo />

            <List sx={{ mt: 1.3 }}>
                {menuItems.map((item) => (
                    <ListItemButton
                        onClick={() => { navigate(item.path) }}
                        key={item.label}
                        sx={{
                            borderRadius: 3,
                            ml: 2,
                            mr: 2,
                            bgcolor:
                                location.pathname.split("/")[1] === item.path.split("/")[1]
                                    ? "primary.main"
                                    : "transparent",
                            "&:hover": {
                                bgcolor: "primary.dark"
                            }
                        }}
                    >
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
}
