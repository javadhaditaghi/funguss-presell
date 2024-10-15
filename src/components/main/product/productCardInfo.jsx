
import CardMedia from '@mui/material/CardMedia';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Typography, Box } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from '@mui/material'
import { styled } from '@mui/material/styles';
import ProductCardRating from './ProductCardRating';
import ProsandCons from './productsProsandCons';
import SummeryCard from './summeryCard';
import ProsandConsCard from './prosandConsCard';


const CustomLink = styled(Link)({
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    color: '#007BFF',
    '&:hover': {
        textDecoration: 'underline',
    },
});




const ProductCardInfo = ({ product }) => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={12} md={3}>
                <ProsandConsCard>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                    <CardMedia
                        component="img"
                        image={product.imgURL}
                        alt={product.productAlt}
                        sx={{ maxHeight: 315, maxWidth: 275, margin: "auto", marginTop: { xs: "15px", md: "auto" } }}

                    />
                </Box>
                <ProductCardRating product={product} />
                
                </ProsandConsCard>

            </Grid2>
            <Grid2 xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
                {/* <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: "column", height: "100%", textAlign: { xs: "center", md: "left" } }}>
                    <Box>
                        <Typography color={"#555"}>Our Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>{product.rating}/10</Typography></Typography>
                        <Typography color={"#555"}>Customer Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>{product.customerRating}/10</Typography> ({product.reviewerCount} Votes)</Typography>

                    </Box>
                    <Box>
                        <Typography>Price: <Box fontWeight={600} display={"inline"}>${product.price}</Box> {product.fivePrice && <Box display={"inline"}>/ 5 bottles:  <Box fontWeight={600} display={"inline"}>${product.fivePrice}<Box display={"inline"} fontWeight={400}> each</Box></Box></Box>} </Typography> 
                        {product.officialWebsite && <Typography>Official Website: <CustomLink href={product.officialWebsite}>Visit Now</CustomLink></Typography>}
                        <Typography>Guarantee: <Box fontWeight={600} display={"inline"}>100% Money Back</Box></Typography>

                    </Box>
                    <Box>

                    </Box>
                </Box> */}
                
                
                <ProsandCons product={product.name} />
                          
                 

               
            </Grid2>
            <Grid2 xs={12} md={4}>
                {/* <ProductCardRating product={product} /> */}



                <SummeryCard eachProduct={product} />
                {/* <Box sx={{marginTop:"10px", width:"100%", textAlign:"center"}}>
                            {product.officialWebsite && <Link href={product.officialWebsite} target="__blank"> <Button variant="contained" sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 49%, rgba(0, 0, 0, 0.15) 51%, rgba(0, 0, 0, 0.05) 100%), #00811d" }} >Checkout the Official Website »</Button></Link>}
                </Box> */}




            </Grid2>
            <Grid2 xs={12} md={3} sx={{ display: { xs: "block", md: "none" } }}>
                <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: "column", height: "100%" }}>
                    {/* <Box sx={{ my: 2 }}>
                        <Typography color={"#555"}>Our Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>{product.rating}/10</Typography></Typography>
                        <Typography color={"#555"}>Customer Rating: <Typography color={"#28A745"} fontWeight={600} sx={{ display: "inline" }}>{product.rating}/10</Typography> ({product.reviewerCount} Votes)</Typography>

                    </Box>
                    <Box sx={{ my: 2 }}>
                         <Typography>Price: <Box fontWeight={600} display={"inline"}>${product.price}</Box> {product.fivePrice && <Box display={"inline"}>/ 5 bottles:  <Box fontWeight={600} display={"inline"}>${product.fivePrice}<Box display={"inline"} fontWeight={400}> each</Box></Box></Box>} </Typography> 
                        {product.officialWebsite && <Typography>Official Website: <CustomLink href={product.officialWebsite}>Visit Now</CustomLink></Typography>}

                        <Typography>Guarantee: <Box fontWeight={600} display={"inline"}>100% Money Back</Box></Typography>

                    </Box>
                    <Box>
                        </Box> */}
                        <ProsandCons product={product.name} />

                        

                        
                </Box>

            </Grid2>
        </Grid2>

    )
}

export default ProductCardInfo