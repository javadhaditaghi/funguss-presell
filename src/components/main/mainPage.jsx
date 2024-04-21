import { Box, Typography, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TopText from "./topText"

const MainPage = () => {
  return (
    <Grid2 container sx={{ background: "linear-gradient(90deg, rgba(242,242,242,1) 0%, rgba(139,157,120,1) 100%)", height: "80vh", width: "100vw" }}>

      <Grid2 md={2}>

      </Grid2>
      <Grid2 md={4}>
        <TopText />


      </Grid2>
      <Grid2 md={4}>

      </Grid2>
      <Grid2 md={2}>

      </Grid2>


    </Grid2>



  )
}

export default MainPage