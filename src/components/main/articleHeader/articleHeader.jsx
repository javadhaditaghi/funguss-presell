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
                <Grid2 xs={0} md={.5} lg={1.7}>

                </Grid2>
                <Grid2 xs={12} md={6} lg={5.3} sx={{ textAlign: { xs: "center", md: "left" }, paddingX: { xs: 3, md: 0 }, display: 'flex', alignItems: "center" }} >
                    <Box>
                        <Typography fontFamily={"Oswald"} fontSize={32} fontWeight={700}>Top 5 Most Effective and Strongest Eylash Enhancing Serums {myYear}</Typography>
                        <Typography fontSize={14} fontFamily={"Open Sans"} color={"#007BFF"}>Last updated on {myMonth} {myYear}</Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={12} md={5} lg={3.3} sx={{ paddingX: "10px", display: { xs: "none", md: "block" } }}>
                    <Box>
                        <QualityCard topic={` ${myYear}'s Top Rated Eyelash Enhancing Serum`} subTopic='Cutiebeauti Eyelash Enhancer' />
                        <ProgressBar />
                    </Box>

                </Grid2>

                <Grid2 xs={0} md={.5} lg={1.7}>


                </Grid2>
            </Grid2>
            <Grid2 container marginTop={5}>
                <Grid2 xs={0} md={.5} lg={1.8}>

                </Grid2>
                <Grid2 xs={11} md={11} lg={8.4} sx={{ m: "auto" }}>
                    <Typography variant='body1' sx={{ mb: 1 }}>
                    Choosing the right eyelash product can be overwhelming due to numerous options and misleading claims. Many products contain unnecessary ingredients, leading to mediocre results. High-quality eyelash serums should feature active ingredients like L-proline, hyaluronic acid, aloe vera, and isopropyl cloprostenate.
                    </Typography>
                    <Typography variant='body1'>
                    Prioritize products based on key ingredients, community feedback, and manufacturer ethics. After thorough research, we've narrowed it down to five top products that nourish and strengthen lashes, enhancing eye charisma.
                    </Typography>
                </Grid2>
                <Grid2 xs={0} md={.5} lg={1.8}>


                </Grid2>

            </Grid2>
        </Box>




    )
}


export default ArticleHeader