import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TopText from "./header/topText"
import QualityCard from "./header/topQualityCard"
import Doctor from '../icons/doctor';
import Quality from '../icons/quality';

import DesktopHeader from "./header/header-desktop";
import MobileHeader from "./header/header-mobile";


const MainPage = () => {
  return (

    // Desktop version
    <>

      <DesktopHeader />

      {/* Mobile version */}

      <MobileHeader />
    </>






  )
}

export default MainPage