import TopText from "./topText";
import QualityCard from "./topQualityCard"
import Doctor from "../../icons/doctor";
import Quality from '../../icons/quality';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"


const HeaderText = () => {
    return (
        <>
            <Grid2 xs={12} md={4} lg={4} sx={{ textAlign: { xs: "center", md: "left" }, paddingX: { xs: 3, md: 0 } }} >
                <TopText />
            </Grid2>
            <Grid2 xs={6} md={3.5} lg={2.5} sx={{ paddingX: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <QualityCard icon={<Quality />} bot={-107} title="Accurate Analysis" subtitle="Our thorough evaluations ensure you get the best advice." />

            </Grid2>
            <Grid2 xs={6} md={3.5} lg={2.5} sx={{ paddingX: "10px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <QualityCard icon={<Doctor />} bot={-107} title="Professional Specialists" subtitle="Expert advice from certified professionals in cosmetics care." />
            </Grid2>
        </>

    )
}

export default HeaderText
