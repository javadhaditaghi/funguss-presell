import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





export default function QualityCard({ icon, title, subtitle, bot, topic, subTopic }) {
    return (
        <Card sx={{ position: "relative", bottom: bot, background: "#2D3928", borderRadius: "10px" }}>

            <CardContent sx={{ textAlign: "center" }}>
                {icon}
                <Typography sx={{ fontSize: 24 }} fontFamily={"DM Sans"} color="#ffffff" gutterBottom>
                    {title}
                </Typography>

                <Typography sx={{ fontSize: 17.6, display: { xs: "none", md: "block" } }} component="div" fontFamily={"DM Sans"} color="#ffffff" col>
                    {subtitle}
                </Typography>

                <Typography fontFamily={"Poppins"} fontSize={"16px"} color={"#ffffff"} letterSpacing={2.4}>
                    {topic}

                </Typography>
                <Typography fontFamily={"Oswald"} color={"#ffffff"} fontSize={43}>
                    {subTopic}

                </Typography>


            </CardContent>

        </Card>
    );
}
