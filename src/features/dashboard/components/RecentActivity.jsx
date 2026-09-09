import { Fragment } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Divider,
    Chip
} from "@mui/material";
import PlayCircle from "@mui/icons-material/PlayCircle";
import TrackChanges from "@mui/icons-material/TrackChanges";
import MyLocation from "@mui/icons-material/MyLocation";
import Sensors from "@mui/icons-material/Sensors";
import Insights from "@mui/icons-material/Insights";
import Description from "@mui/icons-material/Description";
import Person from "@mui/icons-material/Person";
import ModelTraining from "@mui/icons-material/ModelTraining";

const PROFILE_CONFIG = { icon: Person, color: "info.main" };

const typeConfig = {
    SESSION: { icon: PlayCircle, color: "primary.main" },
    CALIBRATION: { icon: TrackChanges, color: "secondary.main" },
    TRACKING: { icon: MyLocation, color: "info.main" },
    DEVICE: { icon: Sensors, color: "warning.main" },
    ANALYSIS: { icon: Insights, color: "success.main" },
    REPORT: { icon: Description, color: "secondary.main" },
    PROFILE: PROFILE_CONFIG,
    AVATAR: PROFILE_CONFIG,
    PASSWORD: PROFILE_CONFIG,
    MODEL: { icon: ModelTraining, color: "success.main" }
};

const statusColor = {
    Completed: "success",
    Failed: "error",
    Warning: "warning",
    Pending: "info",
    Running: "info"
};

const formatDate = (iso) => {
    const date = new Date(iso);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

function RecentActivity({ activities = [] }) {
    const sorted = [...activities].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <Card
            sx={{
                p: 3,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider"
            }}
        >
            <Typography variant="h3" gutterBottom>
                Recent Activities
            </Typography>

            {sorted.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                    No recent activities to display
                </Typography>
            ) : (
                <List disablePadding>
                    {sorted.map((activity, index) => {
                        const group = activity.type.split("_")[0];
                        const config = typeConfig[group] ?? typeConfig.SESSION;
                        const Icon = config.icon;

                        return (
                            <Fragment key={activity.id}>
                                <ListItem
                                    disableGutters
                                    sx={{ px: 0 }}
                                    secondaryAction={
                                        <Chip
                                            label={activity.status}
                                            size="small"
                                            color={statusColor[activity.status] ?? "default"}
                                            variant="outlined"
                                        />
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: config.color }}>
                                            <Icon fontSize="small" />
                                        </Avatar>
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={activity.detail}
                                        secondary={formatDate(activity.date)}
                                        slotProps={{
                                            primary: { pr: 10 }
                                        }}
                                    />
                                </ListItem>

                                {index < sorted.length - 1 && (
                                    <Divider component="li" />
                                )}
                            </Fragment>
                        );
                    })}
                </List>
            )}
        </Card>
    );
}

export default RecentActivity;