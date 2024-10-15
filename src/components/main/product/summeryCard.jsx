import * as React from 'react';

import ProsandConsCard from './prosandConsCard';
import { Typography, Box, Link, Button } from '@mui/material';




export default function SummeryCard({eachProduct}) {
    
    return (

        <ProsandConsCard>
        <Typography variant='h6' fontWeight={700}>Summary:</Typography>
        <Box>
        
                <Typography>{eachProduct.summery}</Typography>
                <Box sx={{marginTop:"10px", width:"100%", textAlign:"center"}}>
                            {eachProduct.officialWebsite && <Link href={eachProduct.officialWebsite} target="__blank"> <Button variant="contained" sx={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 49%, rgba(0, 0, 0, 0.15) 51%, rgba(0, 0, 0, 0.05) 100%), #00811d" }} >Checkout the Official Website »</Button></Link>}
                </Box>
                
        </Box>

        
        </ProsandConsCard>
    );
}
