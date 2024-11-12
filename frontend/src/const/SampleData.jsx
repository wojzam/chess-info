export const samplePuzzle = {
    id: 'ABC123',
    pieces: [
        // White pieces
        {type: 'king', color: 'white', position: 'a1'},
        {type: 'queen', color: 'white', position: 'a5'},
        {type: 'bishop', color: 'white', position: 'e4'},
        {type: 'knight', color: 'white', position: 'c3'},
        {type: 'rook', color: 'white', position: 'f1'},

        // Black pieces
        {type: 'king', color: 'black', position: 'b8'},
        {type: 'queen', color: 'black', position: 'b7'},
        {type: 'bishop', color: 'black', position: 'g6'},
        {type: 'knight', color: 'black', position: 'd7'},
        {type: 'rook', color: 'black', position: 'a8'},
        {type: 'pawn', color: 'black', position: 'c7'}
    ],
    solution: ['a5d8', 'b7d8', 'e4d8', 'b8c8'],
    player: 'white'
};
