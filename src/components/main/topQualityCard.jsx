import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Doctor from '../icons/doctor';
import Quality from '../icons/quality';



export default function QualityCard({ icon, title, subtitle }) {
    return (
        <Card sx={{ position: "relative", bottom: -100, background: "#2D3928", borderRadius: "10px" }}>

            <CardContent sx={{ textAlign: "center" }}>
                {icon}
                <Typography sx={{ fontSize: 24 }} fontFamily={"DM Sans"} color="#ffffff" gutterBottom>
                    {title}
                </Typography>

                <Typography sx={{ fontSize: 17.6 }} component="div" fontFamily={"DM Sans"} color="#ffffff" col>
                    {subtitle}
                </Typography>


            </CardContent>

        </Card>
    );
}
