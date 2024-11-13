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

export const instructors = [
    {id: 1, name: 'Jan Kowalski', specialization: 'Taktyka i Strategie'},
    {id: 2, name: 'Anna Nowak', specialization: 'Gra Początkowa'},
    {id: 3, name: 'Marek Wiśniewski', specialization: 'Analiza Partii'},
    {id: 4, name: 'Karolina Zielińska', specialization: 'Gra Środkowa'},
    {id: 5, name: 'Piotr Lewandowski', specialization: 'Obrona i Kontratak'},
    {id: 6, name: 'Ewa Majewska', specialization: 'Końcówki'},
    {id: 7, name: 'Tomasz Jabłoński', specialization: 'Strategia Obronna'},
    {id: 8, name: 'Magdalena Kamińska', specialization: 'Szachy Blitz'},
    {id: 9, name: 'Paweł Nowicki', specialization: 'Rozwój Umiejętności Taktycznych'},
    {id: 10, name: 'Alicja Kaczmarek', specialization: 'Gra na czas'},
    {id: 11, name: 'Zbigniew Piotrowski', specialization: 'Atak na Króla'},
    {id: 12, name: 'Barbara Kowalczyk', specialization: 'Szachy Klasyczne'},
    {id: 13, name: 'Grzegorz Malinowski', specialization: 'Przygotowanie Debiutowe'},
    {id: 14, name: 'Dorota Wiśniewska', specialization: 'Taktyka Wysokiego Poziomu'},
    {id: 15, name: 'Jacek Kozłowski', specialization: 'Rozwój Strategii Środkowej Gry'},
];
