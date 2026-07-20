import { Box, Chip } from "@mui/material";


function AttentionAlert(){

    return (

        <Box
            display="flex"
            gap={1}
            my={2}
        >

            <Chip
                label="1 sensor critical"
                color="error"
            />

            <Chip
                label="19 device offline"
                color="warning"
            />

            <Chip
                label="4 parking dispute/pending"
                color="primary"
            />

        </Box>

    );
}


export default AttentionAlert;