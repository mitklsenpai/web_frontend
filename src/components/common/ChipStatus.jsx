import {Chip, Box} from "@mui/material";

function ChipStatus({title}) {
    const canBlink = ["Online", "Ready"].includes(title);

    return (
        <Chip 
            label={title}
            icon={
                <Box
                    sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: canBlink ? "success.main" : "error.main",
                        animation: canBlink
                            ? "blink 0.8s infinite"
                            : "none",
                    }}
                />
            }
            sx={{
                bgcolor: "primary.main",
                color: "text.heading",
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