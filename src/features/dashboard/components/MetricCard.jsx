import { Card, Typography, Box } from "@mui/material";

function MetricCard({
    title,
    value,
    color = "text.light",
    subtitle,
    icon,
    children = null
}) {

    return (
        <Card
            sx={{
                p: 2,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                }}
            >
                {icon}

                <Typography
                    variant="caption"
                    sx = {{ color: "text.secondary"}}
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
                    sx = {{ color: color }}
                >
                    {value}
                </Typography>

                {children}    
            </Box>

            <Typography
                variant="caption"
                sx = {{ color: "text.secondary" }}
            >
                {subtitle}
            </Typography>   

        </Card>
    );
}

export default MetricCard;