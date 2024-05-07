import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import DesktopHeader from "./header/header-desktop"
import BlogsHeaderText from "./header/blogs-header-text"




const Blogs = () => {
    return (
        <Grid2 width={"100vw"} container>
            <DesktopHeader imgURL='blogSection.png' text={<BlogsHeaderText />} />
            <Grid2 width={"100vw"} container>

                <Grid2 xs={0} md={.5} lg={1.5}>
                </Grid2>


                <Grid2 xs={11} md={11} lg={9} sx={{ m: "auto" }} container>
                    <Typography>This is a test</Typography>


                </Grid2>


                <Grid2 xs={0} md={.5} lg={1.5}>
                </Grid2>

            </Grid2>








        </Grid2>
    )
}

export default Blogs