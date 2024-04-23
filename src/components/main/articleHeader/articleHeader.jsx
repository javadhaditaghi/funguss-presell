import { Box, Typography } from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import QualityCard from '../header/topQualityCard';


const ArticleHeader = () => {
    return (
        <Grid2 container marginTop={5}>
            <Grid2 xs={0} md={.5} lg={2}>

            </Grid2>
            <Grid2 xs={12} md={6} lg={5.5} sx={{ textAlign: { xs: "center", md: "left" }, paddingX: { xs: 3, md: 0 } }} >
                <Box>
                    <Typography fontFamily={"Oswald"} fontSize={32} fontWeight={700}>Top 5 Most Effective and Strongest Nail Fungus
                        Solutions Of 2024</Typography>
                    <Typography fontSize={14} fontFamily={"Open Sans"} color={"#007BFF"}>Last updated on Apr 2024</Typography>
                </Box>
            </Grid2>
            <Grid2 xs={6} md={5} lg={3.5} sx={{ paddingX: "10px", }}>
                <Box>
                    <QualityCard>

                    </QualityCard>
                </Box>

            </Grid2>

            <Grid2 xs={0} md={.5} lg={1}>


            </Grid2>
        </Grid2>




    )
}


export default ArticleHeader