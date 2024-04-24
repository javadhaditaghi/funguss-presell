import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import QualityCard from '../header/topQualityCard';
import ProgressBar from './progressBar';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ArticleHeader = () => {

    let d = new Date();

    const myYear = d.getFullYear().toString();
    const myMonth = months[d.getMonth()];

    return (
        <Box>
            <Grid2 container marginTop={5}>
                <Grid2 xs={0} md={.5} lg={1.5}>

                </Grid2>
                <Grid2 xs={12} md={6} lg={5.5} sx={{ textAlign: { xs: "center", md: "left" }, paddingX: { xs: 3, md: 0 } }} >
                    <Box>
                        <Typography fontFamily={"Oswald"} fontSize={32} fontWeight={700}>Top 5 Most Effective and Strongest Nail Fungus
                            Solutions Of {myYear}</Typography>
                        <Typography fontSize={14} fontFamily={"Open Sans"} color={"#007BFF"}>Last updated on {myMonth} {myYear}</Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={12} md={5} lg={3.5} sx={{ paddingX: "10px", display: { xs: "none", md: "block" } }}>
                    <Box>
                        <QualityCard topic={` ${myYear}'s Top Rated Nail Fungus Solutions`}>
                        </QualityCard>
                        <ProgressBar />
                    </Box>

                </Grid2>

                <Grid2 xs={0} md={.5} lg={1.5}>


                </Grid2>
            </Grid2>
            <Grid2 container marginTop={5}>
                <Grid2 xs={0} md={.5} lg={1.5}>

                </Grid2>
                <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }}>
                    <Typography variant='body1' sx={{ textIndent: 10, mb: 1 }}>
                        Fungal nail, also known as onychomycosis, is an infection caused by a fungal invasion of the nail structure and is one of the most common nail disorders that causes white and yellow spots, thickening, crumbling, and discoloration of the nail. Various products are available on the market that claim to effectively remedy nail fungus, but most are not trustworthy.
                    </Typography>
                    <Typography variant='body1' sx={{ textIndent: 10 }}>
                        Therefore if you are looking for the best nail fungus solutions currently available on the market,
                        you have come to the right place. We developed some criteria to rank them based on their most essential qualities.In this article, we will cover exactly the best choices to ensure you get the best out of its health benefits and say goodbye to this bacteria and infection.
                    </Typography>
                </Grid2>
                <Grid2 xs={0} md={.5} lg={1.5}>


                </Grid2>

            </Grid2>
        </Box>




    )
}


export default ArticleHeader