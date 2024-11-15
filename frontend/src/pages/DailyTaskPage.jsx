import React from 'react';
import {Box, Typography} from '@mui/material';
import ControlledChessBoard from "../components/chess/ControlledChessBoard.jsx";
import {samplePuzzle} from '../const/SampleData.jsx'

const DailyTaskPage = ({puzzle = samplePuzzle}) => {

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    mb: 3, fontWeight: 'bold', color: '#000'
                }}
            >
                Dzisiejsze zadanie (1/5)
            </Typography>
            <ControlledChessBoard puzzle={puzzle}/>
        </Box>
    );
};

export default DailyTaskPage;