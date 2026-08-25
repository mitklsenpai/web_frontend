import { Card, Typography, Box } from "@mui/material";

function MetricCard({
    title,
    value,
    subtitle,
    color = "primary",
    icon,
    children = null
}) {

    return (
        <Card
            sx={{
                width: 405, height: 90,
                p: 2,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider"
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    alignitems: "center",
                    gap: 1
                }}
            >
                {icon}

                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {title}
                </Typography>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Typography
                    variant="h3"
                    color={`${color}.main`}
                >
                    {value}
                </Typography>

                <Box>
                    {children}    
                </Box>
            </Box>

            <Typography
                variant="caption"
                color="text.secondary"
            >
                {subtitle}
            </Typography>   

        </Card>
    );
}

export default MetricCard;