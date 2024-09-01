import { Typography, Box } from "@mui/material"
import { styled } from '@mui/material';
import jsonData from "./productText.json"
import perser from 'html-react-parser';

const CustomBox = styled(Box)({
    marginBottom: "20px",


});


const ProductText = ({ product }) => {


    return (
        <Box paddingTop={3}>
            <CustomBox>
                {product.introduction.content.map((paragraph, index) => (
                    <Typography key={index} >{perser(paragraph)}</Typography>
                ))}
            </CustomBox>
            <CustomBox>
                <Typography variant="h5">{product.formula.title}</Typography>
                {product.formula.content.map((paragraph, index) => (
                    <Typography key={index} sx={{pb: 1}}>{perser(paragraph)}</Typography>
                ))}
            </CustomBox>

            <CustomBox>
                <Typography variant="h5">{product['user experience'].title}</Typography>
                {product['user experience'].content.map((paragraph, index) => (
                    <Typography key={index}>{perser(paragraph)}</Typography>
                ))}
            </CustomBox>

            <CustomBox>
                <Typography variant="h5">{product['certificates and price'].title}</Typography>
                {product['certificates and price'].content.map((paragraph, index) => (
                    <Typography key={index}>{perser(paragraph)}</Typography>
                ))}
            </CustomBox>

            <CustomBox>
                <Typography variant="h5">{product['bottom-line'].title}</Typography>
                {product['bottom-line'].content.map((paragraph, index) => (
                    <Typography key={index}>{perser(paragraph)}</Typography>
                ))}
            </CustomBox>
        </Box>
    )
}


export default ProductText