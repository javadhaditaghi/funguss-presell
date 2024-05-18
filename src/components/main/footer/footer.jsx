import { Box, Typography, CardMedia } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import logo from '/src/assets/logo.webp'


const Footer = () => {
    return (
        <Grid2 container mt={3} sx={{ backgroundColor: "#5C645E", color: "#ffffff" }}>
            <Grid2 xs={0} md={.5} lg={1.5}>

            </Grid2>
            <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }}>

                <Box sx={{ flexGrow: 1, display: "flex", py: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ mr: 1 }}>

                            <CardMedia
                                component="img"
                                src={logo}
                                alt="The Consumer Magazine"

                                sx={{ width: { xs: "50px", sm: "70px", md: "90px" } }}
                            />
                        </Box>
                    </Box>


                    <Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontSize: { xs: 20, sm: 30, md: 42 } }}
                            fontFamily={"Oswald"}
                            fontWeiight={700}
                        >
                            The Consumer Magazine
                        </Typography>
                        <Typography fontFamily={"Oswald"} color={"#53B8E2"} textTransform={"uppercase"} fontWeight={600} sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>Finding the highest quality and most affordable products for you!</Typography>
                    </Box>
                </Box>
                <Typography fontSize={14} fontFamily={"Open Sans"} pb={1}>We write truthfully and give our honest review of every product we list on The Consumer Magazine website, but we ask that you do your own research before making a purchase.</Typography>
                <Typography fontSize={14} fontFamily={"Open Sans"}>Some products on this website contain affiliate links which means that The Consumer Magazine may earn a commission if you click a link and then decide to purchase particular products.</Typography>
                <Typography my={4}>Copyright © 2016-2024 The Consumer Magazine. All rights reserved.</Typography>

            </Grid2>
            <Grid2 xs={0} md={.5} lg={1.5}>
            </Grid2>



        </Grid2>

    )
}

export default Footer
