import * as React from 'react';
import {Box} from '@mui/material';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';



export default function ProsandConsCard(props) {
    return (
        <Box sx={{ height: "100%" }}>
            <Card variant="outlined" sx={{ border: "1px solid #6C757D", background: "#F8F9FA", height:"100% !important", padding: "0px !important" }}>
                <React.Fragment>
                    <CardContent>                   
                        {props.children}
                    </CardContent>

                </React.Fragment>

            </Card>
        </Box>
    );
}
