import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { CardMedia } from "@mui/material"
import { SvgIcon } from "@mui/material"
import { Helmet } from 'react-helmet-async';


export function Qoute() {
    return (
        <SvgIcon style={{ fontSize: { xs: 25, md: 50 }, marginX: { xs: 6, md: 10 } }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="63" viewBox="0 0 77 63" fill="none">
                <path d="M76.7915 62.625L42.3811 62.625L42.3811 28.18L56.1798 0.582495L73.3332 0.582496L59.6036 28.18L76.7915 28.18L76.7915 62.625Z" fill="#545454" />
                <path d="M34.7915 62.625L0.381084 62.625L0.381087 28.18L14.1798 0.582495L31.3332 0.582496L17.6036 28.18L34.7915 28.18L34.7915 62.625Z" fill="#545454" />
            </svg>
        </SvgIcon>
    )

}

export function Qoutebuttom() {
    return (
        <SvgIcon style={{ fontSize: { xs: 25, md: 50 }, marginX: { xs: 6, md: 10 } }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="63" viewBox="0 0 77 63" fill="none">
                <path d="M0.208496 62.625L34.6189 62.625L34.6189 28.18L20.8202 0.582495L3.66682 0.582496L17.3964 28.18L0.208493 28.18L0.208496 62.625Z" fill="#545454" />
                <path d="M42.2085 62.625L76.6189 62.625L76.6189 28.18L62.8202 0.582495L45.6668 0.582496L59.3964 28.18L42.2085 28.18L42.2085 62.625Z" fill="#545454" />
            </svg>
        </SvgIcon>
    )

}



const About = () => {
    return (
        <>
            <Helmet>
                <title>About us</title>
                <meta name="description" content="Learn about The Consumer Magazine, an independent non-profit organization established in 2016. We are dedicated to ensuring consumers get a fair deal through thorough product evaluations, expert reviews, and valuable insights. Discover our mission, team, and commitment to consumer advocacy." />
                <meta name="keywords" content="The Consumer Magazine, about us, consumer advocacy, product reviews, non-profit organization, consumer rights, product evaluations, quality and safety, affordability, expert insights" />
            </Helmet>

            <Box width={"100vw"} sx={{ marginTop: "200px" }}>
                <Grid2 container>
                    <Grid2 xs={0} md={.5} lg={1.5}>
                    </Grid2>
                    <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }} container>
                        <Grid2 md={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography fontFamily={"Poppins"} fontWeight={600} letterSpacing={"2.4px"} width={130} sx={{ width: { xs: "auto", md: "120px" } }}>
                                About us
                            </Typography>
                        </Grid2>
                        <Grid2 md={9} paddingBottom={5}>
                            <Typography variant="h2" fontWeight={600}>
                                Who We Are
                            </Typography>
                            <Typography mb={1}>
                                Established in 2016, The Consumer Magazine is an independent, non-profit organization committed to ensuring consumers get a fair deal.
                                Navigating the myriad of products available in the market can be daunting. With countless options, finding the one that best suits your needs can be challenging.
                                That’s where we come in!
                                We collaborate with non-profit organizations to leverage our expertise for the benefit of consumers like you. Our team of dedicated product researchers and
                                specialists conducts thorough evaluations of various products, assessing their quality, safety, and affordability
                            </Typography>
                            <Typography mb={1}>

                                We collaborate with non-profit organizations to leverage our expertise for the benefit of consumers like you. Our team of dedicated product researchers and
                                specialists conducts thorough evaluations of various products, assessing their quality, safety, and affordability
                            </Typography>
                            <Typography>
                                Our mission is to help you achieve the best possible results quickly. Choosing poor-quality products can lead to frustration and financial loss. To prevent this,
                                we meticulously research and review a wide range of products, providing you with comprehensive insights. Our reviews are designed to save you time and money by
                                recommending the best products for your needs.
                            </Typography>
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={0} md={.5} lg={1.5}>
                    </Grid2>

                    <CardMedia
                        component="img"
                        src="specialists.jpg"
                        alt="The Consumer Magazine"
                        sx={{ width: "100%", display: { xs: "none", md: "block" } }}

                    />
                    <CardMedia
                        component="img"
                        src="aboutus-mobile.png"
                        alt="The Consumer Magazine"
                        sx={{ width: "100%", display: { xs: "block", md: "none" } }}

                    />

                    <Grid2 xs={0} md={.5} lg={1.5}>
                    </Grid2>
                    <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto", my: 4 }} container>

                        <Grid2 md={7.5}>
                            <Qoute />
                            <Typography mb={1} sx={{ paddingX: { xs: "25px", md: "50px" } }}>
                                The Consumer Magazine is an independent, non-profit organization dedicated to ensuring consumers get a fair deal. Our work is primarily funded by consumers who subscribe to our member-only information and advice, supporting our research, investigations, and campaigns aimed at helping all consumers. Additional funding comes from business programs, contract work with government agencies, and donations.

                            </Typography>
                            <Typography mb={1} sx={{ paddingX: { xs: "25px", md: "50px" } }}>

                                We rigorously test products and services to recommend the best options and investigate issues crucial for consumer awareness. By conducting mystery shopping and surveys, we hold businesses accountable. We advise thousands of consumers about their rights, campaign for beneficial laws and regulations, and recommend trustworthy businesses. Our team of product researchers and specialists removes the guesswork, filtering out scams to provide you with a curated list of the most effective products on the market, ensuring you save time and money.
                            </Typography>
                            <Box textAlign={"right"}>
                                <Qoutebuttom />
                            </Box>
                        </Grid2>
                        <Grid2 md={.5}>
                        </Grid2>
                        <Grid2 md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CardMedia
                                component="img"
                                src="aboutusbottom.png"
                                alt="The Consumer Magazine"
                                sx={{ width: "100%", display: { xs: "none", md: "block" } }}

                            />
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={0} md={.5} lg={1.5}>
                    </Grid2>


                </Grid2>




            </Box>
        </>
    )
}


export default About