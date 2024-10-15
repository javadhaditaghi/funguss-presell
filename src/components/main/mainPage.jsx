import DesktopHeader from "./header/header-desktop";
import MobileHeader from "./header/header-mobile";
import ArticleHeader from "./articleHeader/articleHeader";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Product from "./product/product";
import FAQ from "./FAQ.jsx/faq";
import HeaderText from "./header/main-header-text";
import Specialist from "./header/specialist";
import TopTextMob from "./header/topText-mob";
import ChosenProduct from "./ChosenProduct/chosenProduct";
import { Helmet } from 'react-helmet-async';
import WhyThis from "./why/whythis";
import MetaPixel from "../../util/metaPixel";
import { Box } from "@mui/material";



const MainPage = () => {
  return (

    // Desktop version
    <>
      <Helmet>
        <meta name='description'
          content='Discover the top-rated fungal nail solutions of 2024, including Funguss™, Yanail, EmoniNail, Spirularin, and YogaMedic. Each product is evaluated based on formula, user experience, certifications, and price, offering insights into effectiveness, natural ingredients, and customer satisfaction. Find the best option for healthier nails today.'
        />
        {MetaPixel()}
      </Helmet>

      {/* <DesktopHeader imgURL='headerphoto.jpg' text={<HeaderText />} specialist={<Specialist />} />
      <MobileHeader imgURL='header-mobile.png' text={<TopTextMob />} specialist={<Specialist />} /> */}

      <Box sx={{marginTop:"150px"}}></Box>
      <ArticleHeader />
      <Grid2 container>
        <Grid2 xs={0} md={.5} lg={1.8}>
          <ChosenProduct />
        </Grid2>
        <Grid2 xs={11} md={11} lg={8.4} sx={{ m: "auto" }}>
          <Product />
          <WhyThis />
          <FAQ />
        </Grid2>
        <Grid2 xs={0} md={.5} lg={1.8}>
        </Grid2>
      </Grid2>


    </>







  )
}

export default MainPage