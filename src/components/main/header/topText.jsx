import { Typography, Button } from "@mui/material"



const TopText = () => {
    return (
        <>
    <Typography sx={{ paddingTop: { xs: "160px", md: "150px", xl: "180px" } }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
        WELCOME TO CONSUMER MAG
    </Typography>
    <Typography fontFamily={"Poppins"} color={"#2D3928"} fontSize={{ xs: 30, md: 36, lg: 42, xl: 47 }} fontWeight={600}>
        Your Trusted Source for KP Treatments
    </Typography>
    <Typography fontFamily={"DM Sans"} color={"#3A3A3A"} fontSize={"17.6px"} fontWeight={400} sx={{ display: { xs: "none", md: "block" } }}>
        Consumer Magazine is the #1 Website to discover expert-recommended Keratosis Pilaris Treatments that work effectively.
    </Typography>
    {/* <Button variant="contained" sx={{ marginTop: "15px", backgroundColor: "#5C645E" }} >MAKE APPOINTMENT</Button> */}
</>

    )
}

export default TopText