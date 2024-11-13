import React from 'react';
import {Box, IconButton, Paper, Typography} from '@mui/material';
import ControlledChessBoard from "../components/chess/ControlledChessBoard.jsx";
import {samplePuzzle} from '../const/SampleData.jsx'
import ShuffleIcon from '@mui/icons-material/Shuffle';

const PuzzlePage = () => {

    return (
        <Box>
            <Box mb={3} display="flex" flexDirection="row" justifyContent="space-between" maxWidth={"712px"}>
                <Typography
                    variant="h4"
                    sx={{fontWeight: 'bold', color: '#000'}}
                >
                    Zagadka #{samplePuzzle.id}
                </Typography>
                <Paper elevation={2}>
                    <IconButton>
                        <ShuffleIcon/>
                    </IconButton>
                </Paper>
            </Box>
            <ControlledChessBoard puzzle={samplePuzzle}/>
        </Box>
    );
};

export default PuzzlePage;