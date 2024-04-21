import { Typography, Button } from "@mui/material"



const TopText = () => {
    return (
        <>
            <Typography sx={{ paddingTop: "200px" }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                WELCOME TO CONSUMER MAG
            </Typography>
            <Typography fontFamily={"Poppins"} color={"#2D3928"} fontSize={{ md: 38, lg: 51, xl: 65 }} fontWeight={600}>
                Keep Your Feet Strong & Health
            </Typography>
            <Typography fontFamily={"DM Sans"} color={"#3A3A3A"} fontSize={"17.6px"} fontWeight={400}>
                Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.
            </Typography>
            <Button variant="contained" sx={{ marginTop: "15px", backgroundColor: "#5C645E" }} >MAKE APPOINMENT</Button>
        </>
    )
}

export default TopText