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
            <ProductText product={jsonData.funguss} sign="fung" />
          
            <ProsandCons product="funguss" />
            
            <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
                <Link href={"https://cutiebeauti.com/products/eyelash-enhancer"} target="__blank"><Button
                variant="contained"
                sx={{
                  background: "linear-gradient(180deg, #FFA726 0%, #FB8C00 50%, #EF6C00 100%)",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    background: "linear-gradient(180deg, #FFB74D 0%, #FFA726 50%, #F57C00 100%)",
                    boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Checkout the Official Website »
              </Button></Link>
            </Box>


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

            <Disclaimer />

        </>
    )
}


export default Product
