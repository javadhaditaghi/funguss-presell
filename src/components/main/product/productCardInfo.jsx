
import CardMedia from '@mui/material/CardMedia';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Typography, Box } from "@mui/material"
import Button from '@mui/material/Button';


const ProductCardInfo = () => {
    return (
        <Grid2 container>
            <Grid2 md={4}>
                <CardMedia
                    component="img"
                    image="funguss-package.png"
                    alt="Golden Nutrition Funguss"
                    sx={{ maxHeight: 315, maxWidth: 275, margin: "auto" }}

                />

            </Grid2>
            <Grid2 md={4}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "100%" }}>
                    <Box>
                        <Typography color={"#555"}>Our Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>9.5/10</Typography></Typography>
                        <Typography color={"#555"}>Customer Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>9.5/10</Typography> (576 Votes)</Typography>

                    </Box>
                    <Box paddingTop={5}>
                        <Typography>Price: <Box fontWeight={600} display={"inline"}>$39.95</Box> / 5 bottles:  <Box fontWeight={600} display={"inline"}>$39.95</Box> </Typography>
                        <Typography>Official Website: Visit Now</Typography>
                        <Typography>Guarantee: <Box fontWeight={600} display={"inline"}>100% Money Back</Box></Typography>

                    </Box>
                    <Box paddingTop={9}>
                        <Button variant="contained" >Contained</Button>
                    </Box>
                </Box>

            </Grid2>
            <Grid2 md={4}>

            </Grid2>
        </Grid2>

    )
}

export default ProductCardInfo