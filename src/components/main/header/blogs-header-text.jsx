import { Box, Typography, Link, SvgIcon } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import useMediaQuery from '@mui/material/useMediaQuery';


export function ToRight() {
    return (
        <SvgIcon sx={{ ml: 1, fontSize: { xs: "60px", md: "40px", lg: "50px", xl: "68px" } }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                <path d="M79.4151 50.0633C80.4919 48.9852 81.0967 47.5237 81.0967 46C81.0967 44.4762 80.4919 43.0148 79.4151 41.9366L57.7337 20.2438C56.6551 19.1651 55.1921 18.5591 53.6666 18.5591C52.1411 18.5591 50.6781 19.1651 49.5994 20.2438C48.5207 21.3225 47.9147 22.7855 47.9147 24.311C47.9147 25.8365 48.5207 27.2995 49.5994 28.3782L61.4674 40.25L17.2499 40.25C15.7249 40.25 14.2624 40.8558 13.1841 41.9341C12.1057 43.0125 11.4999 44.475 11.4999 46C11.4999 47.525 12.1057 48.9875 13.1841 50.0658C14.2624 51.1442 15.7249 51.75 17.2499 51.75L61.4674 51.75L49.5994 63.618C49.0653 64.1521 48.6416 64.7862 48.3526 65.484C48.0635 66.1819 47.9147 66.9298 47.9147 67.6851C47.9147 68.4405 48.0635 69.1884 48.3526 69.8863C48.6416 70.5841 49.0653 71.2182 49.5994 71.7523C50.1335 72.2864 50.7676 72.7101 51.4654 72.9992C52.1633 73.2882 52.9112 73.437 53.6666 73.437C54.4219 73.437 55.1699 73.2882 55.8677 72.9992C56.5656 72.7101 57.1996 72.2864 57.7337 71.7523L79.4151 50.0633Z" fill="white" />
            </svg>
        </SvgIcon>
    )

}

const BlogsHeaderText = () => {
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <>
            <Grid2 container xs={11} lg={9}>
                <Grid2 xs={1} md={1} lg={.5} xl={0}></Grid2>
                <Grid2 xs={10} md={10} lg={10} xl={12} sx={{ position: "relative" }}>
                    <Box sx={{ position: "relative", top: "70%" }}>
                        <Typography fontFamily={"Poppins"} fontSize={"16px"} color={"#ffffff"} letterSpacing={2.4}>Featured</Typography>
                        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
                            <Typography fontFamily={"Poppins"} color={"#ffffff"} fontSize={{ xs: "30px", md: "40px", lg: "49px", xl: "68px" }} fontWeight={600} >Breaking Into Potato Design</Typography>
                            <Link sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}><ToRight /></Link>
                        </Box>
                        {matches && <Typography fontFamily={"Poppins"} color={"#ffffff"} fontSize={{ md: "16px", lg: "17px", xl: "18px" }}>Aliquam ex nibh, rhoncus quis mi nec, imperdiet mattis est. Suspendisse potenti. Duis vestibulum magna quis suscipit tempus.</Typography>}
                    </Box>
                </Grid2>

                <Grid2 xs={1} md={1} lg={.5} xl={0}></Grid2>


            </Grid2>
        </>
    )
}


export default BlogsHeaderText