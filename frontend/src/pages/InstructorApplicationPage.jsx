import React from 'react';
import {Box, Button, Container, Grid, List, ListItem, ListItemText, Paper, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

export default function InstructorApplicationPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log("Application submitted:", data);
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4"
                            sx={{
                                mb: 3, fontWeight: 'bold', color: '#000'
                            }}>
                    Zostań Instruktorem
                </Typography>
                <Paper elevation={3} sx={{bgcolor: 'transparent', padding: 2, marginBottom: 3, width: '100%'}}>
                    <Typography variant="h6" gutterBottom textAlign="center">
                        Aby zostać instruktorem, należy spełnić poniższe wymagania:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="1. Minimum 2-letnie doświadczenie w nauczaniu szachów."/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="2. Znajomość zasad i strategii szachowych na poziomie zaawansowanym."/>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="3. Certyfikat instruktorski lub rekomendacje od renomowanego klubu szachowego."/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="4. Umiejętność pracy z osobami w różnym wieku."/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="5. Gotowość do prowadzenia lekcji w formie online i stacjonarnej."/>
                        </ListItem>
                    </List>
                </Paper>

                <Typography variant="h6" gutterBottom mt={8}>
                    Wypełnij formularz zgłoszeniowy:
                </Typography>

                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{mt: 3, width: "100%"}}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                {...register("name", {required: "Imię i nazwisko są wymagane"})}
                                label="Imię i nazwisko"
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("experience", {required: "Prosimy o opisanie swojego doświadczenia"})}
                                label="Doświadczenie"
                                multiline
                                rows={4}
                                fullWidth
                                error={!!errors.experience}
                                helperText={errors.experience?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("certifications")}
                                label="Certyfikaty (opcjonalne)"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Złóż wniosek
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
