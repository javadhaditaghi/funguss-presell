import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Typography } from "@mui/material"
import DesktopHeader from "./header/header-desktop"
import ContactHeaderText from "./header/contact-header-text"
import { ContactInfo, SocialNewtworks } from "../consts/constants"
import Divider from '@mui/material/Divider'
import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"


const CustomizedBox = styled(Box)({
    backgroundColor: '#2D3928',
    borderRadius: "50%",
    marginRight: "10px",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

});











const Contactus = () => {
    return (
        <Box width={"100vw"}>
            <DesktopHeader imgURL='contactus-desktop.png' text={<ContactHeaderText />} />
            <Grid2 container>
                <Grid2 xs={0} md={.5} lg={1.5}>
                </Grid2>

                <Grid2 xs={12} md={11} lg={9} sx={{ m: "auto" }} container>
                    <Grid2 xs={12} md={6} lg={6} container>



                        <Grid2 xs={12} md={12} lg={12} >
                            <Typography sx={{ paddingTop: "50px" }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                                CONTACT US
                            </Typography>
                            <Typography fontFamily={"Poppins"} color={"#2D3928"} fontSize={{ xs: 28, md: 34, lg: 42, xl: 45 }} fontWeight={800}>
                                Get In Touch
                            </Typography>
                            <Typography>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries.
                            </Typography>
                        </Grid2>



                        {ContactInfo.map((contact, index) => (
                            <Grid2 xs={12} md={6} lg={6} key={index} mt={2}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    {contact.icon}
                                    <Box>
                                        <Typography fontSize={24} fontWeight={600} color={"#5C645E"}>{contact.title}</Typography>
                                        <Typography fontSize={17.6} fontWeight={500} color={"#5C645E"}> {contact.value}</Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                        ))}

                        <Divider variant="fullWidth" sx={{ width: "100%", mt: 3, height: "2px", backgroundColor: "#5C645E" }} />


                        <Grid2 xs={12} md={12} lg={12} >
                            <Typography sx={{ paddingTop: "20px" }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                                FOLLOW US ON
                            </Typography>
                            <Box sx={{ display: "flex", width: "100% ", mt: 2 }}>
                                {
                                    SocialNewtworks.map((item, index) => (

                                        <Box key={index}>
                                            <CustomizedBox>{item.icon}</CustomizedBox>
                                        </Box>
                                    )

                                    )
                                }
                            </Box>



                        </Grid2>





                    </Grid2>
                    <Grid2 xs={12} md={6} lg={6} container>


                    </Grid2>
                </Grid2>

                <Grid2 xs={0} md={.5} lg={1.5}>
                </Grid2>

            </Grid2>

        </Box >

    )
}


export default Contactus