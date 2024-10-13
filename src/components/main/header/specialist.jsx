import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography, Link } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';


const CustomLink = styled(Link)({
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#007BFF',
    '&:hover': {
        textDecoration: 'underline',
    },
});

const aboutSpecialist = "I'm Dr. Cynthia Clark, a dermatologist dedicated to helping you achieve healthier, more radiant skin. With a passion for skincare, I review and recommend products that truly make a difference. I provide expert insights to guide you toward effective treatments tailored to your needs, ensuring you make informed decisions for your skincare journey. My mission is to simplify the path to achieving optimal skin health, one product at a time."

export default function Specialist() {

    

    return (
        <Grid2 container padding={1}>

            <Grid2 xs={0} md={.5} lg={1.5}>

            </Grid2>
            <Grid2 xs={12} md={4} lg={2.6} >

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: "100%", position: "relative", marginTop: { xs: "85px", md: "0" } }}>
                    <Tooltip title={aboutSpecialist}>
                    <Avatar
                        alt="Remy Sharp"
                        src="specialist.jpg"
                        sx={{ width: 120, height: 120 }}
                        variant='rounded'
                    />
                    </Tooltip>
                    <Box sx={{ paddingLeft: 2 }}>
                        <Typography sx={{ color: "#555", fontSize:"18px", fontWeight:700 }}>
                        <Box component="span">Dr. Cynthia Clark</Box>
                        </Typography>
                        <Tooltip title={aboutSpecialist}>Dermatologist</Tooltip>
                        <CustomLink href="/antifungalsolutions/contactus">Contact me</CustomLink>
                    </Box>

                </Box>


            </Grid2>
            <Grid2 xs={0} md={7.5} lg={7.5}>

            </Grid2>


        </Grid2>

    );
}
