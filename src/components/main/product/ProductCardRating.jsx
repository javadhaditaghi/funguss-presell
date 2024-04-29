import * as React from 'react';
import Rating from '@mui/material/Rating';
import { Typography, Box } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: "25px", // Default height for medium screens
    borderRadius: 5,
    marginBottom: "10px",
    width: "80%",

    // Media query for extra small screens (up to 600px)
    '@media (max-width: 600px)': {
        height: "15px",
    },

    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#88D668' : '#88D668',
    },
}));


export default function ProductCardRating({ product }) {
    return (
        <Box textAlign={"center"}>
            <Typography fontWeight={700} sx={{ fontSize: { xs: "50px", md: '4vw' } }}>{product.overallRating}</Typography>
            <Rating name="half-rating-read" defaultValue={product.overallRating} precision={0.5} readOnly sx={{ fontSize: { xs: "50px", md: '4vw' } }} />
            <Typography fontWeight={700} sx={{ fontSize: '1.2rem' }}>Based on {product.reviewerCount} reviews</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", my: "5px" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700} sx={{ fontSize: { xs: "13px", md: '16px' } }}> Formula </Typography>
                    <BorderLinearProgress variant="determinate" value={product.formulaRate} sx={{ mb: 0, width: "75%" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: "5px" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700} sx={{ fontSize: { xs: "13px", md: '16px' } }}> User Exp </Typography>
                    <BorderLinearProgress variant="determinate" value={product.userExpRate} sx={{ mb: 0, width: "75%" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: "5px" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700} sx={{ fontSize: { xs: "13px", md: '16px' } }}> Certificates </Typography>
                    <BorderLinearProgress variant="determinate" value={product.cartificateRate} sx={{ mb: 0, width: "75%" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: "5px" }}>
                    <Typography fontFamily={"Open Sans"} fontWeight={700} sx={{ fontSize: { xs: "13px", md: '16px' } }}> Price </Typography>
                    <BorderLinearProgress variant="determinate" value={product.priceRate} sx={{ mb: 0, width: "75%" }} />
                </Box>

            </Box>

        </Box>
    );
}
