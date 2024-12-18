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

export const openings = [
    {
        id: 'RuyLopez',
        name: 'Ruy López',
        description: 'Jedna z najstarszych i najbardziej znanych otwarć szachowych.',
        pieces: [
            // White pieces
            {type: 'king', color: 'white', position: 'e1'},
            {type: 'queen', color: 'white', position: 'd1'},
            {type: 'rook', color: 'white', position: 'a1'},
            {type: 'rook', color: 'white', position: 'h1'},
            {type: 'bishop', color: 'white', position: 'c1'},
            {type: 'bishop', color: 'white', position: 'f1'},
            {type: 'knight', color: 'white', position: 'b1'},
            {type: 'knight', color: 'white', position: 'g1'},
            {type: 'pawn', color: 'white', position: 'a2'},
            {type: 'pawn', color: 'white', position: 'b2'},
            {type: 'pawn', color: 'white', position: 'c2'},
            {type: 'pawn', color: 'white', position: 'd2'},
            {type: 'pawn', color: 'white', position: 'e2'},
            {type: 'pawn', color: 'white', position: 'f2'},
            {type: 'pawn', color: 'white', position: 'g2'},
            {type: 'pawn', color: 'white', position: 'h2'},

            // Black pieces
            {type: 'king', color: 'black', position: 'e8'},
            {type: 'queen', color: 'black', position: 'd8'},
            {type: 'rook', color: 'black', position: 'a8'},
            {type: 'rook', color: 'black', position: 'h8'},
            {type: 'bishop', color: 'black', position: 'c8'},
            {type: 'bishop', color: 'black', position: 'f8'},
            {type: 'knight', color: 'black', position: 'b8'},
            {type: 'knight', color: 'black', position: 'g8'},
            {type: 'pawn', color: 'black', position: 'a7'},
            {type: 'pawn', color: 'black', position: 'b7'},
            {type: 'pawn', color: 'black', position: 'c7'},
            {type: 'pawn', color: 'black', position: 'd7'},
            {type: 'pawn', color: 'black', position: 'e7'},
            {type: 'pawn', color: 'black', position: 'f7'},
            {type: 'pawn', color: 'black', position: 'g7'},
            {type: 'pawn', color: 'black', position: 'h7'}
        ],
        player: 'white'
    },
    {
        id: 'SicilianDefense',
        name: 'Obrona Sycylijska',
        description: 'Agresywne otwarcie czarnych, które zmienia dynamikę gry.',
        pieces: [
            // White pieces
            {type: 'king', color: 'white', position: 'e1'},
            {type: 'queen', color: 'white', position: 'd1'},
            {type: 'rook', color: 'white', position: 'a1'},
            {type: 'rook', color: 'white', position: 'h1'},
            {type: 'bishop', color: 'white', position: 'c1'},
            {type: 'bishop', color: 'white', position: 'f1'},
            {type: 'knight', color: 'white', position: 'b1'},
            {type: 'knight', color: 'white', position: 'g1'},
            {type: 'pawn', color: 'white', position: 'a2'},
            {type: 'pawn', color: 'white', position: 'b2'},
            {type: 'pawn', color: 'white', position: 'c2'},
            {type: 'pawn', color: 'white', position: 'd2'},
            {type: 'pawn', color: 'white', position: 'e4'},
            {type: 'pawn', color: 'white', position: 'f2'},
            {type: 'pawn', color: 'white', position: 'g2'},
            {type: 'pawn', color: 'white', position: 'h2'},

            // Black pieces
            {type: 'king', color: 'black', position: 'e8'},
            {type: 'queen', color: 'black', position: 'd8'},
            {type: 'rook', color: 'black', position: 'a8'},
            {type: 'rook', color: 'black', position: 'h8'},
            {type: 'bishop', color: 'black', position: 'c8'},
            {type: 'bishop', color: 'black', position: 'f8'},
            {type: 'knight', color: 'black', position: 'b8'},
            {type: 'knight', color: 'black', position: 'g8'},
            {type: 'pawn', color: 'black', position: 'a7'},
            {type: 'pawn', color: 'black', position: 'b7'},
            {type: 'pawn', color: 'black', position: 'c5'},
            {type: 'pawn', color: 'black', position: 'd7'},
            {type: 'pawn', color: 'black', position: 'e7'},
            {type: 'pawn', color: 'black', position: 'f7'},
            {type: 'pawn', color: 'black', position: 'g7'},
            {type: 'pawn', color: 'black', position: 'h7'}
        ],
        player: 'black'
    }
];

export const tasks = [
    {
        id: 1,
        title: "Mat w 2 ruchu",
        difficulty: "Średnie",
        description: "Białe zaczynają i dają mata w 2 ruchach"
    },
    {
        id: 2,
        title: "Wieżowy końcowy",
        difficulty: "Trudne",
        description: "Wykorzystaj wieżę do wygrania końcówki"
    },
    {
        id: 3,
        title: "Gambit hetmański",
        difficulty: "Łatwe",
        description: "Znajdź najlepszą odpowiedź na gambit hetmański"
    },
    {
        id: 4,
        title: "Obrona sycylijska",
        difficulty: "Średnie",
        description: "Znajdź kluczowy ruch w obronie sycylijskiej"
    },
    {
        id: 5,
        title: "Końcówka gońcowa",
        difficulty: "Trudne",
        description: "Wykorzystaj przewagę gońca w końcówce"
    },
    {
        id: 6,
        title: "Atak na króla",
        difficulty: "Średnie",
        description: "Przeprowadź decydujący atak na króla przeciwnika"
    },
    {
        id: 7,
        title: "Obrona francuska",
        difficulty: "Łatwe",
        description: "Znajdź właściwą kontynuację w obronie francuskiej"
    },
    {
        id: 8,
        title: "Izolowany pion hetmański",
        difficulty: "Średnie",
        description: "Wykorzystaj słabość izolowanego piona"
    },
    {
        id: 9,
        title: "Końcówka wieżowa",
        difficulty: "Trudne",
        description: "Znajdź wygrywający plan w końcówce wieżowej"
    },
    {
        id: 10,
        title: "Mat w 3 ruchu",
        difficulty: "Trudne",
        description: "Białe zaczynają i dają mata w 3 ruchach"
    }
];

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

export const instructorCourses = {
    'Październik 2024': [
        {
            date: '21.10.2024',
            time: '13:00',
            status: 'accepted',
            user: {name: 'Krzysztof', level: 'początkujący'},
        },
        {
            date: '21.10.2024',
            time: '14:00',
            status: 'accepted',
            user: {name: 'Monika', level: 'zaawansowany'},
        },
        {
            date: '23.10.2024',
            time: '10:00',
            status: 'accepted',
            user: {name: 'Anna', level: 'początkujący'},
        },
        {
            date: '24.10.2024',
            time: '16:00',
            status: 'accepted',
            user: {name: 'Marcin', level: 'średniozaawansowany'},
        },
    ],
    'Listopad 2024': [
        {
            date: '15.11.2024',
            time: '10:00',
            status: 'accepted',
            user: {name: 'Piotr', level: 'średniozaawansowany'},
        },
        {
            date: '17.11.2024',
            time: '09:00',
            status: 'accepted',
            user: {name: 'Elżbieta', level: 'zaawansowany'},
        },
        {
            date: '20.11.2024',
            time: '14:00',
            status: 'accepted',
            user: {name: 'Tomasz', level: 'początkujący'},
        },
    ],
    'Grudzień 2024': [
        {
            date: '05.12.2024',
            time: '11:00',
            status: 'accepted',
            user: {name: 'Katarzyna', level: 'średniozaawansowany'},
        },
        {
            date: '12.12.2024',
            time: '15:00',
            status: 'accepted',
            user: {name: 'Marek', level: 'początkujący'},
        },
    ],
};

export const instructorCoursesPending = {
    'Październik 2024': [
        {
            date: '21.10.2024',
            time: '13:00',
            status: 'pending',
            user: {name: 'Krzysztof', level: 'początkujący'},
        },
        {
            date: '21.10.2024',
            time: '14:00',
            status: 'pending',
            user: {name: 'Monika', level: 'zaawansowany'},
        }
    ],
    'Listopad 2024': [
        {
            date: '15.11.2024',
            time: '10:00',
            status: 'pending',
            user: {name: 'Piotr', level: 'średniozaawansowany'},
        }
    ],
    'Grudzień 2024': [
        {
            date: '05.12.2024',
            time: '11:00',
            status: 'pending',
            user: {name: 'Katarzyna', level: 'średniozaawansowany'},
        }
    ]
};

export const userCourses = {
    'Październik 2024': [
        {
            date: '21.10.2024',
            time: '13:00',
            instructor: 'Jan Kowalski',
        },
        {
            date: '22.10.2024',
            time: '14:00',
            instructor: 'Jan Kowalski',
        },
        {
            date: '23.10.2024',
            time: '10:00',
            instructor: 'Anna Nowak',
        },
        {
            date: '24.10.2024',
            time: '16:00',
            instructor: 'Paweł Wiśniewski',
        },
    ],
    'Listopad 2024': [
        {
            date: '15.11.2024',
            time: '10:00',
            instructor: 'Anna Nowak',
        },
        {
            date: '17.11.2024',
            time: '09:00',
            instructor: 'Paweł Wiśniewski',
        },
        {
            date: '20.11.2024',
            time: '14:00',
            instructor: 'Jan Kowalski',
        },
    ],
    'Grudzień 2024': [
        {
            date: '05.12.2024',
            time: '11:00',
            instructor: 'Anna Nowak',
        },
        {
            date: '12.12.2024',
            time: '15:00',
            instructor: 'Jan Kowalski',
        },
    ],
};

