import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box } from '@mui/material';




const MobileHeader = ({ imgURL, text, specialist }) => {
    return (
        <Box sx={{
            display: {
                xs: "block", md: "none"
            }
        }}>
            <Grid2 container sx={{
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "82vh"

            }}>


                <Grid2 xs={0} md={.5} lg={2}>

                </Grid2>

                {text}

                <Grid2 xs={0} md={.5} lg={1}>

                </Grid2>
            </Grid2>
            {specialist}
        </Box>

    )
}

export default MobileHeader


