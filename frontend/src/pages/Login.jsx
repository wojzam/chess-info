import {useState} from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {useForm} from "react-hook-form";
import {Checkbox, CircularProgress, FormControlLabel, TextField} from "@mui/material";
import MessageBox from "../components/MessageBox";

export default function Login() {
    const {register, control, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm({
        mode: "all",
        defaultValues: {username: "", password: ""}
    });
    const [message, setMessage] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const onSubmit = (data) => {
        setMessage("Logowanie " + data.username);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h4" gutterBottom>
                    Logowanie
                </Typography>
                <MessageBox message={message}/>
                <MessageBox message={errors.root} isError={true}/>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                {...register("username", {
                                    required: "Nazwa użytkownika jest wymagana",
                                    maxLength: {
                                        value: 20,
                                        message: "Nazwa użytkownika nie może przekraczać 20 znaków"
                                    }
                                })}
                                label="Nazwa użytkownika"
                                fullWidth
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ""}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("password", {
                                    required: "Hasło jest wymagane",
                                    minLength: {
                                        value: 8,
                                        message: "Hasło musi mieć przynajmniej 8 znaków"
                                    },
                                    maxLength: {
                                        value: 64,
                                        message: "Hasło nie może przekraczać 64 znaków"
                                    }
                                })}
                                label="Hasło"
                                fullWidth
                                type="password"
                                autoComplete="new-password"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ""}
                            />
                        </Grid>
                    </Grid>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Zapamiętaj mnie"
                        sx={{mt: 1}}
                    />
                    {isSubmitting &&
                        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}> <CircularProgress/> </Box>}
                    <Button type="submit" fullWidth variant="contained" disabled={isSubmitting} sx={{mt: 3, mb: 2}}>
                        Zaloguj
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Nie masz konta? Zarejestruj się
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
