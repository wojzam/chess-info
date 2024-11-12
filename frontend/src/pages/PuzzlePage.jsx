import React, {useState} from 'react';
import {Box, Button, Paper, Stack, Typography} from '@mui/material';
import ChessBoard from '../components/chess/ChessBoard';
import {samplePuzzle} from '../const/SampleData.jsx'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const PuzzlePage = ({puzzleId = samplePuzzle.id, puzzle = samplePuzzle}) => {
    const [showSolution, setShowSolution] = useState(false);

    const handleShowSolution = () => {
        setShowSolution(true);
    };

    const handleFirstMove = () => {
        // TODO
    };

    const handlePreviousMove = () => {
        // TODO
    };

    const handleNextMove = () => {
        // TODO
    };

    const handleLastMove = () => {
        // TODO
    };

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    color: '#000'
                }}
            >
                Zagadka #{puzzleId}
            </Typography>

            {/* Main Content Container */}
            <Box sx={{display: 'flex', gap: 4}}>
                {/* Left Side - Chess Board */}
                <Box sx={{flex: 1}}>
                    <Paper
                        elevation={3}
                        sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            backgroundColor: '#fff'
                        }}
                    >
                        <ChessBoard puzzle={puzzle}/>
                    </Paper>
                </Box>

                {/* Right Side - Info Panel */}
                <Box
                    sx={{
                        width: '260px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        gap: 2
                    }}
                >
                    {/* Move Instructions */}
                    <Paper
                        sx={{
                            p: 2,
                            borderRadius: 2
                        }}
                    >
                        <Typography variant="h6" sx={{mb: 1}}>
                            Twój ruch
                        </Typography>
                        <Typography variant="body1" sx={{mb: 2}}>
                            Znajdź najlepszy ruch dla białych
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleShowSolution}
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#1976d2'
                            }}
                        >
                            Zobacz rozwiązanie
                        </Button>
                    </Paper>

                    {/* Navigation Controls */}
                    <Paper
                        sx={{
                            p: 2,
                            borderRadius: 2
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="space-between"
                        >
                            <Button
                                onClick={handleFirstMove}
                                size="large"
                                sx={{minWidth: 0}}
                            >
                                <FastRewindIcon/>
                            </Button>
                            <Button
                                onClick={handlePreviousMove}
                                size="large"
                                sx={{minWidth: 0}}
                            >
                                <SkipPreviousIcon/>
                            </Button>
                            <Button
                                onClick={handleNextMove}
                                size="large"
                                sx={{minWidth: 0}}
                            >
                                <SkipNextIcon/>
                            </Button>
                            <Button
                                onClick={handleLastMove}
                                size="large"
                                sx={{minWidth: 0}}
                            >
                                <FastForwardIcon/>
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default PuzzlePage;