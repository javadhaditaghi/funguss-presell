import DesktopHeader from "./header/header-desktop";
import MobileHeader from "./header/header-mobile";
import ArticleHeader from "./articleHeader/articleHeader";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ProductCard from "./product/productCard";


const MainPage = () => {
  return (

    // Desktop version
    <>

      <DesktopHeader />
      <MobileHeader />
      <ArticleHeader />
      <Grid2 container>
        <Grid2 xs={0} md={.5} lg={1.5}>

        </Grid2>
        <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }}>

          <ProductCard />






        </Grid2>
        <Grid2 xs={0} md={.5} lg={1.5}>
        </Grid2>


      </Grid2>
    </>







  )
}

export default MainPage