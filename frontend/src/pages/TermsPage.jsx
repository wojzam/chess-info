import React from 'react';
import {Box, Container, Typography} from '@mui/material';

const TermsPage = () => {
    return (
        <Container maxWidth="md">
            <Box width="100%" mt={5}>
                <Typography variant="h4" sx={{mb: 3, fontWeight: 'bold', color: '#000'}}>
                    Regulamin korzystania z chess-info.com
                </Typography>
                <Typography variant="body1" sx={{mb: 2}}>
                    1. Użytkownik zobowiązuje się do korzystania z serwisu zgodnie z jego przeznaczeniem i nie
                    naruszania praw osób trzecich.
                </Typography>
                <Typography variant="body1" sx={{mb: 2}}>
                    2. Chess-info.com zastrzega sobie prawo do aktualizacji treści, ćwiczeń oraz usług dostępnych na
                    platformie bez wcześniejszego powiadomienia.
                </Typography>
                <Typography variant="body1" sx={{mb: 2}}>
                    3. Użytkownicy mogą korzystać z funkcji platformy jedynie w celu rozwijania umiejętności gry w
                    szachy. Wszelkie inne wykorzystanie, w tym komercyjne, jest zabronione.
                </Typography>
                <Typography variant="body1" sx={{mb: 2}}>
                    4. Platforma nie ponosi odpowiedzialności za ewentualne straty wynikłe z używania materiałów
                    dostępnych na stronie.
                </Typography>
                <Typography variant="body1">
                    5. Każdy użytkownik wyraża zgodę na przetwarzanie swoich danych osobowych zgodnie z polityką
                    prywatności.
                </Typography>
            </Box>
        </Container>
    );
};

export default TermsPage;
