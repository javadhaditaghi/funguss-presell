import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TopText from "./topText";
import QualityCard from "./topQualityCard"
import Doctor from "../../icons/doctor";
import Quality from '../../icons/quality';
import Specialist from "./specialist";
import { Box } from '@mui/material';



const MobileHeader = () => {
    return (
        <Box sx={{
            display: {
                xs: "block", md: "none"
            }
        }}>
            <Grid2 container sx={{
                backgroundImage: "url('nail-funguss-mobile.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",

            }}>


                <Grid2 xs={0} md={.5} lg={2}>

                </Grid2>
                <Grid2 xs={12} md={4} lg={4} sx={{ textAlign: { xs: "center", md: "left" }, paddingX: { xs: 3, md: 0 } }} >
                    <TopText />
                </Grid2>
                <Grid2 xs={6} md={3.5} lg={2.5} sx={{ paddingX: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <QualityCard icon={<Quality />} bot={-107} title="Satisfaction Guarantee" subtitle="Aenean euismod eros arcu, ut dapibus vestibulum." />

                </Grid2>
                <Grid2 xs={6} md={3.5} lg={2.5} sx={{ paddingX: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <QualityCard icon={<Doctor />} bot={-107} title="Professional Therapist" subtitle="Aenean euismod eros arcu, ut dapibus vestibulum." />

                </Grid2>
                <Grid2 xs={0} md={.5} lg={1}>

                </Grid2>
            </Grid2>
            <Specialist />
        </Box>

    )
}

export default MobileHeader


