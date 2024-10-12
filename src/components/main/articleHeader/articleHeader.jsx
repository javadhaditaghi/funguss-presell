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
                        <Typography fontFamily={"Oswald"} fontSize={32} fontWeight={700}>Top 5 Most Effective Keratosis Pilaris Treatments of {myYear}</Typography>
                        <Typography fontSize={14} fontFamily={"Open Sans"} color={"#007BFF"}>Last updated on {myMonth} {myYear}</Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={12} md={5} lg={3.3} sx={{ paddingX: "10px", display: { xs: "none", md: "block" } }}>
                    <Box>
                        <QualityCard topic={` ${myYear}'s Keratosis Pilaris Treatments`} subTopic='Golden Nutrition Keratosis Pilaris Lotion' />
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
                    Most people refer to <strong>Keratosis Pilaris</strong> as "chicken skin". It is among the most common conditions of the skin, often <strong>characterized by small, rough bumps</strong>. It may appear on the upper arms, thighs, or cheeks, or even extend to the buttocks. The bumps are brought about by a buildup of keratin, a protein that protects the skin from infections and other damaging substances. However, in individuals suffering from Keratosis Pilaris, keratin forms a plug that blocks hair follicles, thus leading to the formation of tiny, rough bumps.
                    </Typography>
                    <Typography variant='body1' sx={{ mb: 1 }}>
                    Though this is a harmless condition, it might be a bit irritating and damaging. The cause of this is not well known, though highly genetic. Most of the time, it occurs in families and may show its presence when the skin is dry, or under some disease, like eczema.
                    </Typography>
                    <Typography variant='body1'>
                    Our goal has always been offering the most convenient conditions for our esteemed viewers to gain access to the most efficient product as fast as possible without wasting money on unnecessary products. Thus, our team of experts have gone through many products and narrowed them down to the top five while comparing each through texture, ingredients, fragrance, benefits and feedback.
                    </Typography>
                    
                </Grid2>
                <Grid2 xs={0} md={.5} lg={1.8}>


                </Grid2>

            </Grid2>
        </Box>




    )
}


export default ArticleHeader