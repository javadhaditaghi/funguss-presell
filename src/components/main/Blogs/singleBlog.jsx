import * as React from 'react';
import { CardActionArea, Avatar, Typography, CardMedia, CardContent, Card, Box } from '@mui/material';
import { Link } from 'react-router-dom';


export default function BlogCard({ title, description, writer }) {
    return (
        <Card sx={{ margin: "20px", display: "block", textDecoration: "none" }} component={Link} to={`reviews/blogs/${title.split(' ').join('_')}`} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image="blogSection.png"
                    alt="green iguana"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" fontFamily={"Oswald"} fontSize={"28px"} component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, mt: 2 }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.pg"
                            sx={{ width: 50, height: 50, backgroundColor: "#344038" }}>{writer[0]}</Avatar>
                        <Box>
                            <Typography fontFamily={"Open Sans"} fontSize={16}>{writer}</Typography>
                            <Typography fontFamily={"Open Sans"} fontSize={13}>Expert</Typography>
                        </Box>
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
