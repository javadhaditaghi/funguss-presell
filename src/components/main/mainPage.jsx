import { Box, Typography, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TopText from "./topText"
import QualityCard from "./topQualityCard"
import Doctor from '../icons/doctor';
import Quality from '../icons/quality';


const MainPage = () => {
  return (
    <Grid2 container sx={{
      backgroundImage: "url('nail-funguss.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
      width: "100vw"
    }}>

      <Grid2 md={.5} lg={2}>

      </Grid2>
      <Grid2 md={4} lg={4}>
        <TopText />
      </Grid2>
      <Grid2 md={3.5} lg={2.5} sx={{ paddingX: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <QualityCard icon={<Quality />} title="Satisfaction Guarantee" subtitle="Aenean euismod eros arcu, ut dapibus vestibulum." />

      </Grid2>
      <Grid2 md={3.5} lg={2.5} sx={{ paddingX: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <QualityCard icon={<Doctor />} title="Professional Therapist" subtitle="Aenean euismod eros arcu, ut dapibus vestibulum." />

      </Grid2>
      <Grid2 md={.5} lg={1}>

      </Grid2>


    </Grid2>



  )
}

export default MainPage