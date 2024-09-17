import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography, Link } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { styled } from '@mui/material/styles';


const CustomLink = styled(Link)({
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#007BFF',
    '&:hover': {
        textDecoration: 'underline',
    },
});



export default function Specialist() {

    return (
        <Grid2 container padding={1}>

            <Grid2 xs={0} md={.5} lg={1.5}>

            </Grid2>
            <Grid2 xs={12} md={4} lg={2.1} >

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: "100%", position: "relative", marginTop: { xs: "85px", md: "0" } }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="specialist.jpg"
                        sx={{ width: 100, height: 100 }}
                        variant='rounded'
                    />
                    <Box sx={{ paddingLeft: 2 }}>
                        <Typography sx={{ color: "#555" }}>
                            Senior Editor: <Box component="span" >Emily Carter</Box>
                        </Typography>
                        <CustomLink href="/wartremovalsolutions/contactus">Contact me</CustomLink>
                        <CustomLink href="/wartremovalsolutions/about">About me</CustomLink>
                    </Box>

                </Box>


            </Grid2>
            <Grid2 xs={0} md={7.5} lg={7.5}>

            </Grid2>


        </Grid2>

    );
}
