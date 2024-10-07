import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Typography, Box} from '@mui/material';
import jsonData from "./whythis.json"





export default function WhyThis() {
    

    return (
        <>
            <Typography variant='h3' fontFamily={"Oswald"} pb={3}>Why Golden Nutrition Funguss</Typography>
            <Box sx={{backgroundColor: "#f1f1f1", padding: "15px", border: "1px solid rgba(0, 0, 0, 0.12)"}}>
            {jsonData.text}
            </Box>

        </>

    );
}
