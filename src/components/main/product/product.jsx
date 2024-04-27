import ProductCard from "./productCard"
import ProductCardHeader from "./productCardHeader"
import ProductCardInfo from "./productCardInfo"
import ProductText from "./productText"
import ProsandCons from "./productsProsandCons"
import jsonData from "./productText.json"
import { Divider } from "@mui/material"

const Product = () => {
    return (
        <>
            <ProductCard>
                <ProductCardHeader />
                <ProductCardInfo />
            </ProductCard>
            <ProductText product={jsonData.funguss} />
            <ProsandCons product="funguss" />


        </>
    )
}


export default Product
