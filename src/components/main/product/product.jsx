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

            <ProductCard product={cardData.emoniNail}>
                <ProductCardHeader product={cardData.emoniNail} />
                <ProductCardInfo product={cardData.emoniNail} />
            </ProductCard>
            <ProductText product={jsonData.emoniNail} />
            <ProsandCons product="emoniNail" />

            <ProductCard product={cardData.spirularin}>
                <ProductCardHeader product={cardData.spirularin} />
                <ProductCardInfo product={cardData.spirularin} />
            </ProductCard>
            <ProductText product={jsonData.spirularin} />
            <ProsandCons product="spirularin" />

            <ProductCard product={cardData.yogaMedic}>
                <ProductCardHeader product={cardData.yogaMedic} />
                <ProductCardInfo product={cardData.yogaMedic} />
            </ProductCard>
            <ProductText product={jsonData.yogaMedic} />
            <ProsandCons product="yogaMedic" />

        </>
    )
}


export default Product
