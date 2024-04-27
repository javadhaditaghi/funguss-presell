import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';



export default function ProsandConsCard(props) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{ border: "1px solid #6C757D", background: "#F8F9FA" }}>
                <React.Fragment>
                    <CardContent>
                        {props.children}
                    </CardContent>

                </React.Fragment>

            </Card>
        </Box>
    );
}
