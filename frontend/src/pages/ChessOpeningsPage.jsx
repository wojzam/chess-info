import React, {useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import ControlledChessBoard from "../components/chess/ControlledChessBoard.jsx";
import {openings} from "../const/SampleData.jsx";

const ChessOpeningsPage = () => {
    const [currentOpening, setCurrentOpening] = useState(openings[0]);

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    mb: 3, fontWeight: 'bold', color: '#000'
                }}
            >
                {currentOpening.name}
            </Typography>
            <Typography variant="body1" mb={3}>
                {currentOpening.description}
            </Typography>
            <ControlledChessBoard puzzle={currentOpening}/>
            <Box mt={3}>
                {openings.map((opening) => (
                    <Button
                        key={opening.id}
                        variant="contained"
                        color="primary"
                        onClick={() => setCurrentOpening(opening)}
                        sx={{marginRight: 1, marginBottom: 1}}
                    >
                        {opening.name}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default ChessOpeningsPage;
