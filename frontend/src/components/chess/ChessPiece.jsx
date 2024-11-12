import React from 'react';
import {Typography} from '@mui/material';

const ChessPiece = ({type, color}) => {
    const getPieceUnicode = () => {
        const pieces = {
            king: {white: '♔', black: '♚'},
            queen: {white: '♕', black: '♛'},
            rook: {white: '♖', black: '♜'},
            bishop: {white: '♗', black: '♝'},
            knight: {white: '♘', black: '♞'},
            pawn: {white: '♙', black: '♟'},
        };
        return pieces[type][color];
    };

    return (
        <Typography
            component="div"
            sx={{
                fontSize: {xs: '2.5rem', sm: '3.5rem', md: '4rem'},
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                fontFamily: 'serif',

                '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s'
                },
                color: color === 'white' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'
            }}
        >
            {getPieceUnicode()}
        </Typography>
    );
};

export default ChessPiece;