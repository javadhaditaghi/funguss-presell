import { Box, Typography } from '@mui/material';


const ProductCardHeader = ({ product }) => {
    return (
        <>
            <Typography color={"#ffffff"} fontFamily={"Oswald"} fontSize={"30px"} fontWeight={600} fontStyle={"italic"}>{product.id <= 1 ? "Our Top Rated List of Nail Fungus Solutions Of 2024" : ""}</Typography>
            <Box sx={{ backgroundColor: product.ribonBackgroundColor }} marginTop={2}>
                <Typography color={"#383838"} fontFamily={"Open Sans"} fontSize={"26px"} fontWeight={600} paddingX={2}>#{product.id} Rated: {product.title}</Typography>
            </Box>
            <Typography variant='subtitle2' color={"#ffffff"} marginTop={1}>{product.id <= 1 ? "— Top Rated Nail Fungus Solution For 18 Months Straight" : ""}</Typography>
        </>

    )

}

export default ProductCardHeader