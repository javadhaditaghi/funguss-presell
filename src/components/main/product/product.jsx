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
            <ProductCard product={cardData.funguss}>
                <ProductCardHeader product={cardData.funguss} />
                <ProductCardInfo product={cardData.funguss} />
            </ProductCard>
            


            <ProductCard product={cardData.yanail}>
                <ProductCardHeader product={cardData.yanail} />
                <ProductCardInfo product={cardData.yanail} />
            </ProductCard>
            
            <ProductCard product={cardData.emoniNail}>
                <ProductCardHeader product={cardData.emoniNail} />
                <ProductCardInfo product={cardData.emoniNail} />
            </ProductCard>
            

            <ProductCard product={cardData.spirularin}>
                <ProductCardHeader product={cardData.spirularin} />
                <ProductCardInfo product={cardData.spirularin} />
            </ProductCard>
            

            <ProductCard product={cardData.yogaMedic}>
                <ProductCardHeader product={cardData.yogaMedic} />
                <ProductCardInfo product={cardData.yogaMedic} />
            </ProductCard>
            

            <Disclaimer />

        </>
    )
}


export default Product
