import { Typography, Box, CardMedia } from "@mui/material"
import Error404Image from '/src/assets/banner44.png'




const Error404 = () => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <Box>
                <Typography fontSize={{ xs: 170, md: 300 }} lineHeight={.8} fontWeight={600} color={"#344038"} >404</Typography>
                <Typography fontSize={{ xs: 38, md: 74 }} color={"#344038"}>PAGE NOT FOUND</Typography>
            </Box>
            <Typography fontSize={{ xs: 20, md: 45 }} color={"#344038"}>OOOPPS! THAT PAGE CAN’T BE FOUND.</Typography>

            <CardMedia
                component="img"
                src={Error404Image}
                alt="The Consumer Magazine"
                sx={{ borderRadius: "10px", float: "right", mb: 1, width: "50%" }}
            />



        </Box>



    )
}

export default Error404
