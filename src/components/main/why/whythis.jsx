import * as React from 'react';
import {Typography, Box} from '@mui/material';
import jsonData from "./whythis.json";
import perser from 'html-react-parser';





export default function WhyThis() {
    

    return (
        <>
            <Typography variant='h3' fontFamily={"Oswald"} pb={3}>Why Golden Nutrition Funguss</Typography>
            <Box sx={{backgroundColor: "#f1f1f1", padding: "15px", border: "1px solid rgba(0, 0, 0, 0.12)"}}>
                <Typography sx={{mb:1}}>{jsonData.introduction}</Typography>
                <Typography sx={{mb:1}}>{perser(jsonData.text)}</Typography>
                <Typography sx={{mb:1}}>{perser(jsonData.text1)}</Typography>
                <Typography sx={{mb:1}}>{perser(jsonData.text2)}</Typography>
                <Typography sx={{mb:1}}>{perser(jsonData.text3)}</Typography>
                <Typography sx={{mb:1}}>{perser(jsonData.text4)}</Typography>
                <Typography sx={{mb:1}}>{perser(jsonData.text5)}</Typography>
                <Typography sx={{mb:1}}>{perser(jsonData.text6)}</Typography>
            </Box>

        </>

    );
}
