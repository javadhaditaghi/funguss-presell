import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Typography } from "@mui/material"

const ContactHeaderText = () => {
    return (
        <>
            <Grid2 xs={0} md={1} lg={1.5} >
            </Grid2>

            <Grid2 xs={12} md={5} lg={4} >
                <Typography sx={{ paddingTop: "350px" }} fontFamily={"Poppins"} color={"#2D3928"} fontSize={{ xs: 30, md: 36, lg: 44, xl: 47 }} fontWeight={700}>
                    Contact Us
                </Typography>
                <Typography fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                    Keep in touch
                </Typography>

            </Grid2>

            <Grid2 xs={6} md={3} lg={2.5} >


            </Grid2>

            <Grid2 xs={6} md={3} lg={2.5}>

            </Grid2>
        </>

    )
}

export default ContactHeaderText