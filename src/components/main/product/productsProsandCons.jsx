import { Typography, Box, Divider } from "@mui/material"
import ProsandConsCard from "./prosandConsCard"
import { Pros } from "../../icons/pros"
import { Cons } from "../../icons/cons"
import jsonData from "./prosandcons.json"






const ProsandCons = ({ product }) => {
    console.log(typeof (product))

    return (
        <ProsandConsCard>

            {
                jsonData[product].pros.map((pro, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: { md: "center" }, py: "2px" }}>
                        <Pros />
                        <Typography>{pro}</Typography>
                    </Box>
                ))
            }
            <Divider sx={{ my: 2 }} />

            {
                jsonData[product].cons.map((cons, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: { md: "center" }, py: "2px" }}>
                        <Cons />
                        <Typography>{cons}</Typography>
                    </Box>
                ))
            }

        </ProsandConsCard>


    )
}


export default ProsandCons

