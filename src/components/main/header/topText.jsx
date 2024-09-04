import { Typography, Button, Box } from "@mui/material"



const TopText = () => {
    return (
        <>
            <Box sx={{ paddingTop: { xs: "140px", md: "150px", xl: "160px" } }}>
                <Typography sx={{ display: { xs: "none", md: "block" } }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                WELCOME TO CONSUMER MAG
                </Typography>
                <Typography fontFamily={"Poppins"} color={"#2D3928"} fontSize={{ xs: 30, md: 36, lg: 42, xl: 47 }} fontWeight={600}>
                    Your Ultimate Guide to Healthy Toenails
                </Typography>
                <Typography fontFamily={"DM Sans"} color={"#3A3A3A"} fontSize={"17.6px"} fontWeight={400} sx={{ display: { xs: "none", md: "block" } }}>
                    Consumer Magazine is the #1 Website to find out the best fungal infection treatments chosen by experts.
                </Typography>

                <Typography sx={{ display: { xs: "block", md: "none" } }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                    Make sure you read this before purchase.
                </Typography>
                {/* <Button variant="contained" sx={{ marginTop: "15px", backgroundColor: "#5C645E" }} >MAKE APPOINMENT</Button> */}
            </Box>
        </>
    )
}

export default TopText