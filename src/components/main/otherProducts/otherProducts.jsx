import * as React from 'react';
import { Box, Typography, Link, Grid, Button} from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

import CardMedia from '@mui/material/CardMedia';





export default function OtherProducts() {

    return (
        <Grid2 container padding={1} variant="filled" sx={{ backgroundColor: "#E8FFDE", width: "100%", minWidth: 275, minHeight: 300, borderRadius: "12px", margin:"20px 0" }}>
        <Grid2 xs={12}>
        <Typography variant='h4' fontWeight={600} fontFamily={"Oswald"} sx={{textAlign:"center", margin:"10px 0 0px 0" , fontSize:{xs:"1.65rem !important", md:"2.6rem !important"}}}>Strengthen Your Choice!</Typography>
        <Typography variant='body2' sx={{margin:"10px 0 0 0", textAlign:"center", textTransform:"uppercase"}}>
        Make your choice even more powerful by incorporating the following solutions.</Typography>
        </Grid2>
        <Grid2 xs={6} md={3} sx={{textAlign:"center" , padding:"0 10px"}}>
        <Typography variant='h6' fontFamily={"Oswald"} sx={{textAlign:"center", margin:"10px 0 0 0", fontSize:{xs:"1.1rem !important", md:"1.25rem !important"}}}>Funguss - Antifungal Supplement</Typography>
        <Typography variant='body2' sx={{margin:"10px 0 0 0"}}>Use alongside Funguss Serum to address fungal infections from the inside out</Typography>
        <Link href={"https://goldennutrition.com/collections/homepage/products/funguss-antifungal-supplement"} target="__blank">
        <CardMedia
        component="img"
        height="auto"
        image="supplementother.png"
        alt="Paella dish"
        />
        </Link> 
      <Link href={"https://goldennutrition.com/collections/homepage/products/funguss-antifungal-supplement"} target="__blank"><Button variant="contained" sx={{marginBottom:"13px"}}>Order Now</Button></Link>
      
      </Grid2>
      <Grid2 xs={6} md={3} sx={{textAlign:"center", padding:"0 10px"}}>
      <Typography variant='h6' fontFamily={"Oswald"} sx={{textAlign:"center", margin:"10px 0 0 0", fontSize:{xs:"1.1rem !important", md:"1.25rem !important"} }}>Fuguss - Fungus Removal Spray</Typography>
      <Typography variant='body2' sx={{margin:"10px 0 0 0"}}> Pair with Funguss Serum for quick, easy application over a larger area</Typography>
      <Link href={"https://goldennutrition.com/collections/homepage/products/funguss-fungal-nail-repair-pen"} target="__blank">
      <CardMedia
      component="img"
      height="auto"
      image="sprayother.png"
      alt="Paella dish"
      />
      </Link>
      <Link href={"https://goldennutrition.com/collections/funguss/products/foot-fungus-removal-spray"} target="__blank"><Button variant="contained" sx={{marginBottom:"13px"}}>Order Now</Button></Link>
      
      
      </Grid2>
      <Grid2 xs={6} md={3} sx={{textAlign:"center", padding:"0 10px"}}>
      <Typography variant='h6' fontFamily={"Oswald"} sx={{textAlign:"center", margin:"10px 0 0 0", fontSize:{xs:"1.1rem !important", md:"1.25rem !important"}}}>Fuguss - Fungal Nail Repair Pen</Typography>
      <Typography variant='body2' sx={{margin:"10px 0 0 0"}}> Apply together with Funguss Serum for precise, targeted treatment</Typography>
      <Link href={"https://goldennutrition.com/collections/homepage/products/funguss-fungal-nail-repair-pen"} target="__blank">
      <CardMedia
      component="img"
      height="auto"
      
      image="penother.png"
      alt="Paella dish"
      />
      </Link>
      <Link href={"https://goldennutrition.com/collections/homepage/products/funguss-fungal-nail-repair-pen"} target="__blank"><Button variant="contained" sx={{marginBottom:"13px"}}>Order Now</Button></Link>
      
      </Grid2>
      <Grid2 xs={6} md={3} sx={{textAlign:"center", padding:"0 10px"}}>
      <Typography variant='h6' fontFamily={"Oswald"} sx={{textAlign:"center", margin:"10px 0 0 0", fontSize:{xs:"1.1rem !important", md:"1.25rem !important"}}}>Fuguss - Fungus Nail Repair Patches</Typography>
      <Typography variant='body2' sx={{margin:"10px 0 0 0"}}>Use alongside Funguss Serum for intensive protection and deep moisturizing overnight</Typography>
      <Link href={"https://goldennutrition.com/collections/homepage/products/funguss-nail-repair-patches"} target="__blank">
      <CardMedia
      component="img"
      height="auto"
      image="patchother.png"
      alt="Paella dish"
      />
      </Link>
      <Link href={"https://goldennutrition.com/collections/homepage/products/funguss-nail-repair-patches"} target="__blank"><Button variant="contained" sx={{marginBottom:"13px"}}>Order Now</Button></Link>
     
        
      </Grid2>

          


        </Grid2>

    );
}
