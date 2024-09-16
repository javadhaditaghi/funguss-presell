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
                        <Typography fontFamily={"Oswald"} fontSize={32} fontWeight={700}>Top 5 Most Effective and Strongest Wart Removers of {myYear}</Typography>
                        <Typography fontSize={14} fontFamily={"Open Sans"} color={"#007BFF"}>Last updated on {myMonth} {myYear}</Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={12} md={5} lg={3.3} sx={{ paddingX: "10px", display: { xs: "none", md: "block" } }}>
                    <Box>
                        <QualityCard topic={` ${myYear}'s Top Rated Wart Remover Solution`} subTopic='Golden Nutrition Wart Remover' />
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
                    Warts are small, harmless skin growths emanating from the virus of HPV. The main bothering parts of warts would be their unsightly look and probable irritation. The most common areas for the outbreaks of warts would include hands, feet, genitals, and faces.
                    </Typography>
                    <Typography variant='body1' sx={{ mb: 1 }}>
                    Warts can appear in any age group. They are transferred through direct contact with the virus- from another person or from different parts of your own body.
                    </Typography>
                    <Typography variant='body1'>
                    Warts are of different types: common warts, plantar warts - around the feet area - and flat warts. Most of these can be treated with over-the-counter options, with salicylic acid treatments being particularly effective.
                    </Typography>
                    <Typography variant='body1'>
                    This article meticulously analyzed <strong>five of the best-selling over the counter wart removal products</strong>. We are reviewing the <strong>concentration, ingredients, and methods of application</strong> to help make a meaningful choice among them.
                    </Typography>
                </Grid2>
                <Grid2 xs={0} md={.5} lg={1.8}>


                </Grid2>

            </Grid2>
        </Box>




    )
}


export default ArticleHeader