import React from 'react';
import {Box, Button, Grid, Typography, useTheme} from '@mui/material';

export default function MainPage() {
    const theme = useTheme();

    return (
        <>
            <Box display="flex" flexDirection="column" gap={2}>
                <Typography fontWeight="bold" gutterBottom sx={{
                    fontSize: {
                        xs: theme.typography.h4.fontSize,
                        sm: theme.typography.h3.fontSize,
                        md: theme.typography.h2.fontSize,
                    },
                    textAlign: {
                        xs: 'center',
                        sm: 'center',
                        md: 'left',
                    },
                }}>
                    Twój Przewodnik po Świecie Szachów
                </Typography>

                <Grid container spacing={2} sx={{justifyContent: {xs: "center", sm: 'center', md: 'flex-start'}}}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" gap={5} height="100%"
                             sx={{
                                 alignItems: {xs: "center", sm: 'center', md: 'flex-start'}
                             }}>
                            <Typography gutterBottom sx={{
                                lineHeight: 2,
                                fontSize: {
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h5.fontSize,
                                },
                                textAlign: {
                                    xs: 'center',
                                    sm: 'center',
                                    md: 'left',
                                },
                            }}>
                                Naucz się zasad gry od podstaw.<br/>
                                Poznaj zaawansowane strategie i techniki.<br/>
                                Trenuj z najlepszymi szachistami na świecie.
                            </Typography>

                            <Button variant="contained" color="primary" size="large" sx={{width: 'fit-content'}}
                                    href="/login">
                                Rozpocznij teraz!
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <Box
                                component="img"
                                src="/img/boards.png"
                                alt="boards"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '400px',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}
