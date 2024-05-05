import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { CardMedia } from "@mui/material"
import { SvgIcon } from "@mui/material"


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
        <Box width={"100vw"} sx={{ marginTop: "200px" }}>
            <Grid2 container>
                <Grid2 xs={0} md={.5} lg={1.5}>
                </Grid2>
                <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }} container>
                    <Grid2 md={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography fontFamily={"Poppins"} fontWeight={600} letterSpacing={"2.4px"} width={130} sx={{ width: { xs: "auto", md: "120px" } }}>
                            About us
                            Our team
                            Press
                        </Typography>
                    </Grid2>
                    <Grid2 md={9} paddingBottom={5}>
                        <Typography variant="h2" fontWeight={600}>
                            About us
                        </Typography>
                        <Typography mb={1}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
    )
}


export default About