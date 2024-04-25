import * as React from 'react';
import Rating from '@mui/material/Rating';
import { Typography, Box } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 25,
    borderRadius: 5,
    marginBottom: "10px",

    width: "80%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#88D668' : '#88D668',
    },
}));


export default function ProductCardRating() {
    return (
        <Box textAlign={"center"}>
            <Typography fontWeight={700} sx={{ fontSize: '4vw' }}>4.8</Typography>
            <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} readOnly sx={{ fontSize: '4vw' }} />
            <Typography fontWeight={700} sx={{ fontSize: '1.2rem' }}>Based on 456 reviews</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%", height: "80%" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700}> Formula </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%", height: "80%" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700}> User Exp </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%", height: "80%" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700}> Certificates </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%", height: "80%" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700}> Price </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Box>





            </Box>

        </Box>
    );
}
