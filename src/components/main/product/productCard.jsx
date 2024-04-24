import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';






export default function ProductCard(props) {
    return (
        <Box sx={{ mt: 3 }}>
            <Card variant="filled" sx={{ backgroundColor: "#E8FFDE", width: "100%", minWidth: 275, minHeight: 300, borderRadius: "12px" }}><CardContent>
                {props.children}

            </CardContent></Card>
        </Box>
    );
}