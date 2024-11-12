import React, {useEffect, useState} from 'react';
import {Grid, Paper, Typography} from '@mui/material';
import ChessPiece from './ChessPiece';
import {isValidMove} from '../../logic/ChessLogic.jsx';

const ChessBoard = ({puzzle}) => {
    const [board, setBoard] = useState(Array(8).fill(null).map(() => Array(8).fill(null)));
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [validMoves, setValidMoves] = useState([]);
    const [moveHistory, setMoveHistory] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    useEffect(() => {
        if (puzzle) {
            setupPuzzle(puzzle);
        }
    }, [puzzle]);

    const setupPuzzle = (puzzleData) => {
        const newBoard = Array(8).fill(null).map(() => Array(8).fill(null));
        puzzleData.pieces.forEach(piece => {
            const [row, col] = convertPosition(piece.position);
            newBoard[row][col] = {
                type: piece.type,
                color: piece.color
            };
        });
        setBoard(newBoard);
        setCurrentPlayer(puzzleData.player);
    };

    const convertPosition = (algebraic) => {
        const col = algebraic.charCodeAt(0) - 'a'.charCodeAt(0);
        const row = 8 - parseInt(algebraic[1]);
        return [row, col];
    };

    const handleSquareClick = (row, col) => {
        const piece = board[row][col];

        if (piece && piece.color === currentPlayer) {
            handlePieceSelection(row, col);
            return;
        }

        if (selectedPiece) {
            handlePieceMove(row, col);
        }
    };

    const handlePieceSelection = (row, col) => {
        const [selectedRow, selectedCol] = selectedPiece || [];

        if (selectedPiece && row === selectedRow && col === selectedCol) {
            clearSelection();
        } else {
            setSelectedPiece([row, col]);
            highlightValidMoves(row, col);
        }
    };

    const handlePieceMove = (row, col) => {
        const [selectedRow, selectedCol] = selectedPiece;
        const selectedPieceData = board[selectedRow][selectedCol];

        if (isValidMove(selectedPieceData, [selectedRow, selectedCol], [row, col], board)) {
            const newBoard = board.map(row => row.slice());

            newBoard[row][col] = selectedPieceData;
            newBoard[selectedRow][selectedCol] = null;

            setBoard(newBoard);
            updateMoveHistory(selectedPieceData, selectedPiece, [row, col]);
        }
        clearSelection();
    };

    const clearSelection = () => {
        setSelectedPiece(null);
        setValidMoves([]);
    };

    const updateMoveHistory = (piece, from, to) => {
        setMoveHistory(prevHistory => [
            ...prevHistory,
            {piece, from, to}
        ]);
    };

    const highlightValidMoves = (row, col) => {
        const piece = board[row][col];
        const valid = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (isValidMove(piece, [row, col], [i, j], board)) {
                    valid.push([i, j]);
                }
            }
        }

        setValidMoves(valid);
    };

    const isHighlighted = (row, col) => {
        return validMoves.some(([r, c]) => r === row && c === col);
    };

    const columnLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rowLabels = ['8', '7', '6', '5', '4', '3', '2', '1'];

    return (
        <Paper elevation={3} sx={{
            width: '100%',
            maxWidth: '100vw',
            padding: 2,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Grid
                container
                sx={{
                    width: 'min(80vw, 680px)',
                    height: 'min(80vw, 680px)',
                }}
            >
                {board.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((piece, colIndex) => {
                            const isLight = (rowIndex + colIndex) % 2 === 0;
                            const isSelected = selectedPiece &&
                                selectedPiece[0] === rowIndex &&
                                selectedPiece[1] === colIndex;

                            return (
                                <Grid
                                    item
                                    key={`${rowIndex}-${colIndex}`}
                                    xs={1.5}
                                    sx={{
                                        flex: '1 0 12.5%',
                                        aspectRatio: '1',
                                        backgroundColor: isLight ? '#edd7b3' : '#b38760',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative',
                                        ...(isSelected && {
                                            backgroundColor: '#6b8e23',
                                        }),
                                        ...(isHighlighted(rowIndex, colIndex) && {
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: '20%',
                                                height: '20%',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0, 255, 0, 0.3)',
                                            }
                                        })
                                    }}
                                    onClick={() => handleSquareClick(rowIndex, colIndex)}
                                >
                                    {piece && <ChessPiece {...piece} position={[rowIndex, colIndex]}/>}
                                    {/* Display label*/}
                                    {colIndex === 0 && (
                                        <Typography
                                            sx={{
                                                position: 'absolute',
                                                left: '4px',
                                                top: '4px',
                                                fontSize: {xs: '0.75rem', sm: '1rem'},
                                                color: isLight ? '#333' : '#fff'
                                            }}
                                        >
                                            {rowLabels[rowIndex]}
                                        </Typography>
                                    )}
                                    {rowIndex === 7 && (
                                        <Typography
                                            sx={{
                                                position: 'absolute',
                                                right: '4px',
                                                bottom: '4px',
                                                fontSize: {xs: '0.75rem', sm: '1rem'},
                                                color: isLight ? '#333' : '#fff'
                                            }}
                                        >
                                            {columnLabels[colIndex]}
                                        </Typography>
                                    )}
                                </Grid>
                            );
                        })}
                    </React.Fragment>
                ))}
            </Grid>
        </Paper>

    );
};

export default ChessBoard;