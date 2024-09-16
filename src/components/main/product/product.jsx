import ProductCard from "./productCard"
import ProductCardHeader from "./productCardHeader"
import ProductCardInfo from "./productCardInfo"
import ProductText from "./productText"
import ProsandCons from "./productsProsandCons"
import jsonData from "./productText.json"
import cardData from "./productCard.json"
import Disclaimer from "./disclaimer"
import { Box, Link, Button } from "@mui/material"


const Product = () => {
    return (
        <>
            <ProductCard product={cardData.product_one}>
                <ProductCardHeader product={cardData.product_one} />
                <ProductCardInfo product={cardData.product_one} />
            </ProductCard>
            <ProductText product={jsonData.product_one} />
            <ProsandCons product="product_one" />
            <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
                <Link href={"https://goldennutrition.com"} target="__blank"> <Button variant="contained" sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 49%, rgba(0, 0, 0, 0.15) 51%, rgba(0, 0, 0, 0.05) 100%), #00811d", fontSize: "1.1rem" }} >Checkout the Official Website »</Button></Link>
            </Box>


            <ProductCard product={cardData.product_two}>
                <ProductCardHeader product={cardData.product_two} />
                <ProductCardInfo product={cardData.product_two} />
            </ProductCard>
            <ProductText product={jsonData.product_two} />
            <ProsandCons product="product_two" />

            <ProductCard product={cardData.product_three}>
                <ProductCardHeader product={cardData.product_three} />
                <ProductCardInfo product={cardData.product_three} />
            </ProductCard>
            <ProductText product={jsonData.product_three} />
            <ProsandCons product="product_three" />

            <ProductCard product={cardData.product_four}>
                <ProductCardHeader product={cardData.product_four} />
                <ProductCardInfo product={cardData.product_four} />
            </ProductCard>
            <ProductText product={jsonData.product_four} />
            <ProsandCons product="product_four" />

            <ProductCard product={cardData.product_five}>
                <ProductCardHeader product={cardData.product_five} />
                <ProductCardInfo product={cardData.product_five} />
            </ProductCard>
            <ProductText product={jsonData.product_five} />
            <ProsandCons product="product_five" />

            <Disclaimer />

        </>
    )
}


export default Product
