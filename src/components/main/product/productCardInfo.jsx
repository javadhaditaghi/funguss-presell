
import CardMedia from '@mui/material/CardMedia';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Typography, Box } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProductCardRating from './ProductCardRating';


const CustomLink = styled('Link')({
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    color: '#007BFF',
    '&:hover': {
        textDecoration: 'underline',
    },
});


const ProductCardInfo = () => {
    return (
        <Grid2 container>
            <Grid2 md={4}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "100%", alignItems: "center" }}>

                    <CardMedia
                        component="img"
                        image="funguss-package.png"
                        alt="Golden Nutrition Funguss"
                        sx={{ maxHeight: 315, maxWidth: 275, margin: "auto" }}

                    />
                </Box>

            </Grid2>
            <Grid2 md={3}>
                <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: "column", height: "100%" }}>
                    <Box>
                        <Typography color={"#555"}>Our Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>9.5/10</Typography></Typography>
                        <Typography color={"#555"}>Customer Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>9.5/10</Typography> (576 Votes)</Typography>

                    </Box>
                    <Box>
                        <Typography>Price: <Box fontWeight={600} display={"inline"}>$39.95</Box> / 5 bottles:  <Box fontWeight={600} display={"inline"}>$39.95</Box> </Typography>
                        <Typography>Official Website: <CustomLink>Visit Now</CustomLink></Typography>
                        <Typography>Guarantee: <Box fontWeight={600} display={"inline"}>100% Money Back</Box></Typography>

                    </Box>
                    <Box>
                        <Button variant="contained" sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 49%, rgba(0, 0, 0, 0.15) 51%, rgba(0, 0, 0, 0.05) 100%), #28A745" }} >Checkout the Official Website »</Button>
                    </Box>
                </Box>

            </Grid2>
            <Grid2 md={5}>
                <ProductCardRating />
            </Grid2>
        </Grid2>

    )
}

export default ProductCardInfo