import { Box, Typography } from '@mui/material';


const ProductCardHeader = ({ product }) => {
    return (
        <>
            <Typography color={"#383838"} fontFamily={"Oswald"} fontSize={"30px"} fontWeight={600} fontStyle={"italic"}>{product.id <= 1 ? "Best Wart Remover of 2024: Our Top Pick" : ""}</Typography>
            <Box sx={{ backgroundColor: product.ribonBackgroundColor }} marginTop={2}>
                <Typography color={"#383838"} fontFamily={"Open Sans"} fontSize={"26px"} fontWeight={600} paddingX={2}>#{product.id} Rated: {product.title}</Typography>
            </Box>
            <Typography variant='subtitle2' color={"#6C757D"} marginTop={1}>{product.id <= 1 ? "— Top Rated Wart Remover for 18 Months Straight" : ""}</Typography>
        </>

    )

}

export default ProductCardHeader