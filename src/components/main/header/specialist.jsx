import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography, Link } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { styled } from '@mui/material/styles';
import {Tooltip} from '@mui/material';


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
                        <CustomLink href="/bestkplotions/contactus">Contact me</CustomLink>
                        <Tooltip title="I’m Emily Carter, a skincare enthusiast who reviews products focused on improving skin health. I provide honest insights to help people find effective treatments for their skincare needs, ensuring they make informed choices. My goal is to simplify the process of achieving healthier, radiant skin."><CustomLink href="/bestkplotions/about">About me</CustomLink></Tooltip>
                    </Box>

                </Box>


            </Grid2>
            <Grid2 xs={0} md={7.5} lg={7.5}>

            </Grid2>


        </Grid2>

    );
}
