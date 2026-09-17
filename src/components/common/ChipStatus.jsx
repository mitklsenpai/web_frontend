import {Chip, Box} from "@mui/material";

function ChipStatus({title}) {
    const isReady = ["Online", "Ready"].includes(title);

    return (
        <Chip 
            label={title}
            icon={
                <Box
                    sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: isReady ? "success.dark" : "error.dark",
                        animation:
                            "blink 0.8s infinite"
                    }}
                />
            }
            sx={{
                bgcolor: isReady ? "success.light" : "error.light",
                color: isReady ? "text.secondary" : "text.primary",
                "@keyframes blink": {
                    "0%, 100%": {
                        opacity: 1,
                    },
                    "50%": {
                        opacity: 0.2,
                    },
                },
            }}
        />
    )
}

export default ChipStatus;