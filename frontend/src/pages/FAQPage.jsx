import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
    {
        question: "Czy dostęp do platformy jest darmowy?",
        answer: "Tak, podstawowy dostęp do platformy chess-info.com jest darmowy. Możesz rozwiązywać zagadki szachowe i poznawać podstawy bez zakładania konta. Konto jest wymagane tylko do uczestnictwa w spotkaniach z instruktorami na żywo oraz zapisywania postępów w nauce."
    },
    {
        question: "Jakie funkcje są dostępne po założeniu konta?",
        answer: "Po założeniu konta zyskasz możliwość dołączania do lekcji z instruktorami na żywo, zapisywania swoich postępów i uzyskania dostępu do zaawansowanych materiałów. Możesz również otrzymywać spersonalizowane rekomendacje, które pomogą ci w dalszym rozwoju."
    },
    {
        question: "Jak rozpocząć naukę na chess-info.com?",
        answer: "Wystarczy założyć konto, aby odblokować pełne funkcje platformy, a następnie wybrać poziom trudności dostosowany do twoich umiejętności. Dostępne są zarówno podstawowe lekcje, jak i bardziej zaawansowane zagadki oraz testy, które pomogą ci rozwijać umiejętności strategiczne."
    },
    {
        question: "Czy są dostępni instruktorzy na żywo?",
        answer: "Tak, platforma oferuje możliwość pracy z instruktorami na żywo, którzy są dostępni na różnych poziomach zaawansowania. Wybierz instruktora, który odpowiada twoim potrzebom i umów się na sesję, aby uzyskać wskazówki dostosowane do twoich celów nauki."
    },
    {
        question: "Jakie poziomy trudności są dostępne?",
        answer: "Chess-info.com oferuje lekcje i zagadki na różnych poziomach trudności – od początkującego do zaawansowanego. Wybór poziomu zależy od twoich umiejętności oraz preferencji, a nasze testy i system rekomendacji pomogą ci wybrać najlepsze lekcje i ćwiczenia."
    },
    {
        question: "Czy są dostępne rankingi lub statystyki postępów?",
        answer: "Tak, użytkownicy z kontem mogą śledzić swoje postępy, otrzymywać szczegółowe statystyki oraz porównywać wyniki z innymi graczami. Dzięki temu możesz monitorować swój rozwój i wyznaczać sobie nowe cele."
    }
];

const FAQPage = () => {
    return (
        <Container maxWidth="md">
            <Box width="100%" mt={5}>
                <Typography variant="h4" sx={{mb: 3, fontWeight: 'bold', color: '#000'}}>
                    Często zadawane pytania (FAQ)
                </Typography>
                <Divider sx={{mb: 3}}/>

                {faqData.map((item, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="subtitle1">{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2">{item.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
};

export default FAQPage;
