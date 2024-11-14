import React from 'react';
import {Box, Button, Container, TextField, Typography} from '@mui/material';

const ContactPage = () => {
    return (
        <Container maxWidth="sm">
            <Box width="100%" mt={5}>
                <Typography variant="h4" sx={{mb: 3, fontWeight: 'bold', color: '#000'}}>
                    Kontakt
                </Typography>
                <Typography variant="body1" sx={{mb: 3}}>
                    Masz pytania lub potrzebujesz wsparcia? Skontaktuj się z nami za pomocą poniższego formularza.
                </Typography>
                <TextField
                    fullWidth
                    label="Twoje imię"
                    variant="outlined"
                    sx={{mb: 2}}
                />
                <TextField
                    fullWidth
                    label="Twój email"
                    variant="outlined"
                    sx={{mb: 2}}
                />
                <TextField
                    fullWidth
                    label="Wiadomość"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{mb: 2}}
                />
                <Button variant="contained" color="primary">
                    Wyślij wiadomość
                </Button>
            </Box>
        </Container>
    );
};

export default ContactPage;
