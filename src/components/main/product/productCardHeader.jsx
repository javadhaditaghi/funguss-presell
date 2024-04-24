import { Box, Typography } from '@mui/material';


const ProductCardHeader = () => {
    return (
        <>
            <Typography color={"#383838"} fontFamily={"Oswald"} fontSize={"30px"} fontWeight={600} fontStyle={"italic"}>Our Top Rated List of Nail Fungus Solutions Of 2024</Typography>
            <Box sx={{ backgroundColor: "#8FFF00" }} marginTop={2}>
                <Typography color={"#383838"} fontFamily={"Open Sans"} fontSize={"26px"} fontWeight={600} paddingX={2}>#1 Rated: Golden Nutrition®:  Funguss™</Typography>


            </Box>
            <Typography variant='subtitle2' color={"#6C757D"} marginTop={1} >— Top Rated Nail Fungus Solution For 18 Months Straight</Typography>

        </>

    )

}

export default ProductCardHeader