import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box } from '@mui/material';


const DesktopHeader = ({ imgURL, text, specialist }) => {
    return (
        <Box sx={{
            display: {
                xs: "none", md: "flex"
            }, flexDirection: "column"
        }}>

            <Grid2 container sx={{
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "87vh",
                width: "100vw",

            }}>

                <Grid2 xs={.5} md={.5} lg={1.5}>
                </Grid2>

                {text}

                <Grid2 xs={.5} md={.5} lg={1.5}>
                </Grid2>
            </Grid2>
            {specialist}
        </Box >


    )
}

export default DesktopHeader