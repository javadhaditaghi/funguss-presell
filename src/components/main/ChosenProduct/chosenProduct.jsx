import React, { useState, useEffect } from 'react';
import { Typography, Box, CardMedia, CardActionArea, Button, Link } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { keyframes } from '@emotion/react';



const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
`;

const ChosenProduct = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{}}>
            {show && (
                <>
                    <Box sx={{ display: { xs: 'none', md: 'block' }, position: "fixed", right: "15px", bottom: "10px", backgroundColor: "rgba(45, 57, 40, .5)", padding: 3, borderRadius: "15px", textAlign: 'center', zIndex: 3 }}>
                        <Typography variant='body1' fontFamily={"Poppins"} fontSize={"10px"} color={"#ffffff"} letterSpacing={2} textAlign={"left"}>Top Rated Product</Typography>
                        <Typography variant='h2' fontSize={"17px"} fontFamily={"Oswald"} fontWeight={600} pb={2} color={'#ffffff'}>Golden Nutrition Funguss</Typography>
                        <CardMedia
                            component="img"
                            height="170"
                            image='funguss.png'
                            alt='Golden Nutrition Funguss'
                            sx={{
                                width: "90%",
                                margin: 'auto',
                                animation: `${bounce} 2s infinite`

                            }}
                        />
                        <Link href={"https://nailfunguss.com/"}>
                            <Button
                                sx={{
                                    backgroundColor: "#ffffff",
                                    mt: 2,
                                    "&:hover": {
                                        backgroundColor: "#d7d8d6"
                                    }
                                }}
                            >
                                Official Website
                            </Button>
                        </Link>
                    </Box>

                    <Link href={"https://nailfunguss.com/"}>
                        <CardActionArea>
                            <Box sx={{ display: { xs: 'block', md: 'none' }, position: "fixed", right: "0px", bottom: "0px", left: "0px", backgroundColor: "rgba(45, 57, 40, .8)", padding: 2, borderRadius: "15px 15px 0 0 ", textAlign: 'center', zIndex: 3 }}>
                                <CardMedia
                                    component="img"

                                    image='funguss.png'
                                    alt='Golden Nutrition Funguss'
                                    sx={{
                                        width: "100px",
                                        margin: 'auto',
                                        position: "absolute",
                                        bottom: 0,

                                    }}

                                />
                                <Box>
                                    <Typography variant='body1' fontFamily={"Poppins"} fontSize={"15px"} color={"#ffffff"} letterSpacing={2} sx={{ position: "relative", left: "9%" }}>Top Rated Product <ArrowForwardIcon sx={{
                                        position: "relative",
                                        top: 7,
                                        animation: `${bounce} 1s infinite`
                                    }} /> </Typography>
                                    <Typography fontSize={"25px"} fontFamily={"Oswald"} color={"#ffffff"} sx={{ position: "relative", left: "13%" }}>Golden Nutrition Funguss</Typography>
                                </Box>
                            </Box>
                        </CardActionArea>
                    </Link>
                </>
            )}
        </Box>
    );
}

export default ChosenProduct;
