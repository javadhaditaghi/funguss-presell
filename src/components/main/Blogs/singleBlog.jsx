import * as React from 'react';
import { CardActionArea, Avatar, Typography, CardMedia, CardContent, Card, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import blogPhoto from './blogSection.png'
import noImge from '/src/assets/blogs/img_not_found.jpg'


export default function BlogCard({ title, description, writer, useAnotherImage, role }) {



    return (
        <Card sx={{ margin: "20px", display: "block", textDecoration: "none" }} component={Link} to={`/wartremovalsolutions/blogs/${encodeURIComponent(title.split(' ').join('_'))}`} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image={useAnotherImage == null | useAnotherImage == '../undefined' ? noImge : useAnotherImage}
                    alt={title}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" fontFamily={"Oswald"} fontSize={"24px"} component="div">
                        {title.length > 40 ? title.slice(0, 40) + "..." : title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.length > 115 ? description.slice(0, 110) + "....." : description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, mt: 2 }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.pg"
                            sx={{ width: 50, height: 50, backgroundColor: "#344038" }}>{writer[0]}</Avatar>
                        <Box>
                            <Typography fontFamily={"Open Sans"} fontSize={16}>{writer}</Typography>
                            <Typography fontFamily={"Open Sans"} fontSize={13}>{role}</Typography>
                        </Box>
                    </Box>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}
