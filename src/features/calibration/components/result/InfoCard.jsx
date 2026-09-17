import { Card, Typography, Stack } from "@mui/material";

function InfoCard({title, value, color="text.light"}) {

    return (
        <Card
            sx={{
                p: 2,
                border: "1px solid",
                borderColor: "divider",
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >

            <Stack spacing={3}> 
                <Typography
                    variant="h3"
                    sx = {{ color: "text.dark" }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="h1"
                    sx = {{ color: color }}
                >
                    {value}
                </Typography>
            </Stack>

        </Card>
    );
}

export default InfoCard;