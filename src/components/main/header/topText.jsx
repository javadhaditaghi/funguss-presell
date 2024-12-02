import { Typography, Button, Box } from "@mui/material"



const TopText = () => {
    return (
        <>
            <Typography sx={{ paddingTop: { xs: "160px", md: "150px", xl: "180px" } }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                LASH ENHANCER REVIEWS
            </Typography>
            <Typography fontFamily={"Poppins"} color={"#2D3928"} fontSize={{ xs: 28, md: 34, lg: 35, xl: 38 }} fontWeight={600}>
                The Way to Find the Best Eyelash Enhancer <Box sx={{fontWeight:900, textTransform: "uppercase", display:"inline"}}>that really works!</Box>
            </Typography>
            <Typography fontFamily={"DM Sans"} color={"#3A3A3A"} fontSize={"17.6px"} fontWeight={400} sx={{ display: { xs: "none", md: "block" } }}>
            The #1 Website for Achieving Stunning Lashes with Top-Rated Products
            </Typography>
            {/* <Button variant="contained" sx={{ marginTop: "15px", backgroundColor: "#5C645E" }} >MAKE APPOINMENT</Button> */}
        </>
    )
}

export default TopText