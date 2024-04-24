import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



export default function ProductCard(props) {
    return (
        <Box sx={{ mt: 3 }}>
            <Card variant="filled" sx={{ backgroundColor: "#E8FFDE", width: "100%", minWidth: 275, minHeight: 300, borderRadius: "12px" }}><CardContent>
                {props.Children}

            </CardContent></Card>
        </Box>
    );
}