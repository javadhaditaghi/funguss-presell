import ProductCard from "./productCard"
import ProductCardHeader from "./productCardHeader"
import ProductCardInfo from "./productCardInfo"
import ProductText from "./productText"

const Product = () => {
    return (
        <>
            <ProductCard>
                <ProductCardHeader />
                <ProductCardInfo />
            </ProductCard>
            <ProductText />
        </>
    )
}


export default Product
