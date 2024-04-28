import ProductCard from "./productCard"
import ProductCardHeader from "./productCardHeader"
import ProductCardInfo from "./productCardInfo"
import ProductText from "./productText"
import ProsandCons from "./productsProsandCons"
import jsonData from "./productText.json"
import cardData from "./productCard.json"


const Product = () => {
    return (
        <>
            <ProductCard product={cardData.funguss}>
                <ProductCardHeader product={cardData.funguss} />
                <ProductCardInfo product={cardData.funguss} />
            </ProductCard>
            <ProductText product={jsonData.funguss} />
            <ProsandCons product="funguss" />

            <ProductCard product={cardData.yanail}>
                <ProductCardHeader product={cardData.yanail} />
                <ProductCardInfo product={cardData.yanail} />
            </ProductCard>
            <ProductText product={jsonData.yanail} />
            <ProsandCons product="yanail" />


        </>
    )
}


export default Product
