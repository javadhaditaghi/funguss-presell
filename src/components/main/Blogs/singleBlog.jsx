import * as React from 'react';
import { CardActionArea, Avatar, Typography, CardMedia, CardContent, Card, Box } from '@mui/material';


export default function BlogCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image="blogSection.png"
                    alt="green iguana"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" fontFamily={"Oswald"} fontSize={"28px"} component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, mt: 2 }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.pg"
                            sx={{ width: 50, height: 50 }}>Ra</Avatar>
                        <Box>
                            <Typography fontFamily={"Open Sans"} fontSize={16}>Remy Sharp</Typography>
                            <Typography fontFamily={"Open Sans"} fontSize={13}>Expert</Typography>
                        </Box>
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
