import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Typography } from "@mui/material"
import DesktopHeader from "./header/header-desktop"
import ContactHeaderText from "./header/contact-header-text"
import { ContactInfo, SocialNewtworks } from "../consts/constants"
import Divider from '@mui/material/Divider'
import styled from "@emotion/styled"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet-async';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



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

    const form = useRef();
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });


    // Handler for input field changes
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ns4lxz7', 'template_vhnbb5i', form.current, {
                publicKey: 'k7SWEFkoeXC0c3gwI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormData({ name: "", email: "", subject: "", message: "" });
                    setOpen(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setOpenError(true);
                },
            );
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setOpenError(false);
      };




    

    return (
        <>
            <Helmet>
                <title>Contact us</title>
                <meta name="description" content="Get in touch with The Consumer Magazine for any inquiries, feedback, or assistance. Our team is dedicated to providing prompt and helpful support. Contact us today!" />
                <meta name="keywords" content="Contact, The Consumer Magazine, customer support, feedback, inquiries, assistance" />
            </Helmet>

            <Box width={"100vw"}>
                <DesktopHeader imgURL='contactus-desktop.png' text={<ContactHeaderText />} />
                <Grid2 container sx={{ pt: { xs: 10, md: 0 } }}>
                    <Grid2 xs={0} md={.5} lg={1.5}>
                    </Grid2>

                    <Grid2 xs={12} md={11} lg={9} sx={{ m: "auto" }} container >
                        <Grid2 xs={12} md={6} lg={6} container px={2}>



                            <Grid2 xs={12} md={12} lg={12} >
                                <Typography sx={{ paddingTop: "50px" }} fontFamily={"Poppins"} color={"#5C645E"} fontWeight={600} letterSpacing={2.4}>
                                    CONTACT US
                                </Typography>
                                <Typography fontFamily={"Poppins"} color={"#2D3928"} fontSize={{ xs: 28, md: 34, lg: 42, xl: 45 }} fontWeight={800}>
                                    Get In Touch
                                </Typography>
                                <Typography mb={1}>
                                    We value your feedback and inquiries. Whether you have questions about our reviews, need assistance with a consumer issue,
                                    or want to learn more about our work, we’re here to help.
                                </Typography>
                                <Typography>
                                    Our team is committed to providing you with prompt and helpful support. Thank you for choosing The Consumer Magazine!
                                </Typography>
                            </Grid2>



                            {ContactInfo.map((contact, index) => (
                                <Grid2 xs={12} md={6} lg={6} key={index} mt={2}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        {contact.icon}
                                        <Box>
                                            <Typography fontSize={{ xs: 20, md: 20, xl: 24 }} fontWeight={600} color={"#5C645E"}>{contact.title}</Typography>
                                            <Typography fontSize={{ xs: 17.6, md: 16, xl: 15.6 }} fontWeight={500} color={"#5C645E"}> {contact.value}</Typography>
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
                        <Grid2 xs={12} md={6} lg={6} container px={2}>


                            <Grid2 xs={12} md={12} lg={12} >
                                <Typography sx={{ paddingTop: "95px", fontSize: "24px" }} fontFamily={"DM Sans"} color={"#2D3928"} fontWeight={600}>
                                    CONTACT US
                                </Typography>

                                <form ref={form} onSubmit={sendEmail}>
                                    <Box mt={2}>
                                        <TextField
                                            name="name"
                                            id="name"
                                            placeholder="Name *"
                                            label="Name"
                                            type="text"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            value={formData.name}
                                            required
                                            sx={{ width: "100%" }}
                                            InputProps={{ sx: { borderRadius: "10px" } }}
                                        />
                                    </Box>
                                    <Box mt={2}>
                                        <TextField
                                            name="email"
                                            id="email"
                                            placeholder="Email *"
                                            label="Email"
                                            type="email"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            value={formData.email}
                                            required
                                            sx={{ width: "100%" }}
                                            InputProps={{ sx: { borderRadius: "10px" } }}
                                        />
                                    </Box>
                                    <Box mt={2}>
                                        <TextField
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject *"
                                            label="Subject"
                                            type="text"
                                            className="form-control"
                                            onChange={handleInputChange}
                                            value={formData.subject}
                                            required
                                            sx={{ width: "100%" }}
                                            InputProps={{ sx: { borderRadius: "10px" } }}
                                        />
                                    </Box>
                                    <Box mt={2}>
                                        <TextField
                                            name="message"
                                            id="message"
                                            placeholder="Your Question *"
                                            label="Your Question"
                                            multiline
                                            maxRows={10}
                                            rows={4}
                                            className="form-control"
                                            onChange={handleInputChange}
                                            value={formData.message}
                                            required
                                            sx={{ width: "100%" }}
                                            InputProps={{ sx: { borderRadius: "10px" } }}
                                        />
                                    </Box>
                                    <Box mt={2} sx={{ width: "100%", textAlign: "center" }}>
                                        <Button type="submit" variant="contained">Send the Message</Button>
                                    </Box>
                                </form>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert
                                        onClose={handleClose}
                                        severity="success"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        Your Email has been successfully sent!
                                    </Alert>
                                </Snackbar>
                                <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert
                                        onClose={handleClose}
                                        severity="error"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        Oops Something went wrong! 
                                    </Alert>
                                </Snackbar>

                            </Grid2>




                        </Grid2>
                    </Grid2>

                    <Grid2 xs={0} md={.5} lg={1.5}>
                    </Grid2>

                </Grid2>

            </Box>
        </>

    )
}


export default Contactus