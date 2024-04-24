import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';




function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", mt: 2, position: "relative" }}>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" {...props} sx={{ height: "25px", borderRadius: 1 }} />
            </Box>
            <Box sx={{ position: "absolute", top: 2.5 }}>
                <Typography variant="body2" color="#fff" fontFamily={"Open Sans"}>Overall Rating: {`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}


export default function ProgressBar() {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 90) {
                    clearInterval(timer); // Stop the interval when progress reaches 90
                    return 90;
                } else {
                    return prevProgress + 10;
                }
            });
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}