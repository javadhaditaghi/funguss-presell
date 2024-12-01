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



const MainPage = () => {
  return (

    // Desktop version
    <>
      <Helmet>
        <meta name='description'
          content='Explore the top-rated eyelash serums of 2024, including Cutiebeauti, GrandeLASH-MD, LashFood, Liaison Lash Bond, and REALASH. Each product is evaluated based on formula, user experience, effectiveness, and price, offering insights into natural ingredients, user satisfaction, and safety. Find the best option for longer, fuller lashes today.'
        />
        {/* {MetaPixel()} */}
      </Helmet>

      <DesktopHeader imgURL='headerphoto.jpg' text={<HeaderText />} specialist={<Specialist />} />
      <MobileHeader imgURL='header-mobile.jpg' text={<TopTextMob />} specialist={<Specialist />} />
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