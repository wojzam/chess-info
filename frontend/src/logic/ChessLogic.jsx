export const isValidMove = (piece, start, end, board) => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    const deltaRow = Math.abs(endRow - startRow);
    const deltaCol = Math.abs(endCol - startCol);

    if (board[endRow][endCol] && board[endRow][endCol].color === piece.color) {
        return false;
    }

    switch (piece.type) {
        case 'pawn':
            // Basic pawn movement (not including en passant)
            const direction = piece.color === 'white' ? -1 : 1;
            const startRank = piece.color === 'white' ? 6 : 1;

            // Forward movement
            if (startCol === endCol) {
                if (startRow + direction === endRow && !board[endRow][endCol]) {
                    return true;
                }
                // First move can be two squares
                if (startRow === startRank &&
                    startRow + 2 * direction === endRow &&
                    !board[endRow][endCol] &&
                    !board[startRow + direction][startCol]) {
                    return true;
                }
            }
            // Capture diagonally
            if (deltaCol === 1 && startRow + direction === endRow) {
                if (board[endRow][endCol] && board[endRow][endCol].color !== piece.color) {
                    return true;
                }
            }
            return false;

        case 'knight':
            return (deltaRow === 2 && deltaCol === 1) || (deltaRow === 1 && deltaCol === 2);

        case 'bishop':
            return deltaRow === deltaCol && !isDiagonalBlocked(start, end, board);

        case 'rook':
            return (startRow === endRow || startCol === endCol) &&
                !isStraightBlocked(start, end, board);

        case 'queen':
            return ((startRow === endRow || startCol === endCol) &&
                    !isStraightBlocked(start, end, board)) ||
                (deltaRow === deltaCol && !isDiagonalBlocked(start, end, board));

        case 'king':
            return deltaRow <= 1 && deltaCol <= 1;

        default:
            return false;
    }
};

const isDiagonalBlocked = (start, end, board) => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    const rowDir = endRow > startRow ? 1 : -1;
    const colDir = endCol > startCol ? 1 : -1;

    let row = startRow + rowDir;
    let col = startCol + colDir;

    while (row !== endRow && col !== endCol) {
        if (board[row][col]) return true;
        row += rowDir;
        col += colDir;
    }

    return false;
};

const isStraightBlocked = (start, end, board) => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    if (startRow === endRow) {
        const dir = endCol > startCol ? 1 : -1;
        for (let col = startCol + dir; col !== endCol; col += dir) {
            if (board[startRow][col]) return true;
        }
    } else {
        const dir = endRow > startRow ? 1 : -1;
        for (let row = startRow + dir; row !== endRow; row += dir) {
            if (board[row][startCol]) return true;
        }
    }

    return false;
};
