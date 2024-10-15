import { Typography, Box, Divider } from "@mui/material"
import ProsandConsCard from "./prosandConsCard"
import { Pros } from "../../icons/pros"
import { Cons } from "../../icons/cons"
import jsonData from "./prosandcons.json"
import perser from 'html-react-parser';






const ProsandCons = ({ product }) => {
    

    return (
        <ProsandConsCard>

            {
                jsonData[product].pros.map((pro, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: { md: "center" }, py: "2px" }}>
                        <Pros />
                        <Typography>{perser(pro)}</Typography>
                    </Box>
                ))
            }
            <Divider sx={{ my: 2 }} />

            {
                jsonData[product].cons.map((cons, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: { md: "center" }, py: "2px" }}>
                        <Cons />
                        <Typography>{perser(cons)}</Typography>
                    </Box>
                ))
            }

        </ProsandConsCard>


    )
}


export default ProsandCons

