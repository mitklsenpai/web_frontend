import { Card, Typography, Box } from "@mui/material";

function MetricCard({
    title,
    value,
    subtitle,
    color = "primary",
    icon
}) {

    return (
        <Card
            sx={{
                p: 2,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider"
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
                    color="text.secondary"
                >
                    {title}
                </Typography>
            </Box>


            <Typography
                variant="h3"
                color={`${color}.main`}
                mt={1}
            >
                {value}
            </Typography>


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