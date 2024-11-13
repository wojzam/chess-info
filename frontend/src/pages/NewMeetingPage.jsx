import React, {useState} from 'react';
import {Box, FormControlLabel, InputAdornment, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WeeklyCalendar from "../components/WeeklyCalendar.jsx";
import {instructors} from "../const/SampleData.jsx";
import Button from "@mui/material/Button";

const NewMeetingPage = () => {
    const [selectedInstructor, setSelectedInstructor] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredInstructors = instructors.filter(instructor =>
        instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{mb: 3, fontWeight: 'bold', color: '#000'}}
            >
                Nowe spotkanie
            </Typography>
            <Typography
                variant="h6"
                sx={{mb: 3, fontWeight: 'light', color: '#000'}}
            >
                <span style={{fontWeight: 'bold'}}>
                    Chcesz podnieść swoje umiejętności szachowe na wyższy poziom?
                </span> <br/>
                Skorzystaj z indywidualnych lekcji z doświadczonymi instruktorami Chess-Info. <br/>
                Spotkania online są dostosowane do Twojego poziomu i celów, aby zapewnić Ci jak najlepsze rezultaty.
            </Typography>

            {/* Main Content Container */}
            <Box
                mt={10}
                sx={{
                    display: 'flex',
                    gap: '20vw',
                    flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                    },
                }}>
                {/* Instructor Selection Panel */}
                <Box
                    sx={{
                        width: {md: '350px', lg: '400px'},
                        height: 'fit-content'
                    }}
                >
                    <Typography variant="h5" sx={{mb: 2, fontWeight: 'bold'}}>
                        Wybierz Instruktora:
                    </Typography>

                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Szukaj..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{
                            mb: 3,
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 20,
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box sx={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#f1f1f1',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#888',
                            borderRadius: '4px',
                        },
                    }}>
                        <RadioGroup
                            value={selectedInstructor}
                            onChange={(e) => setSelectedInstructor(e.target.value)}
                        >
                            {filteredInstructors.map((instructor) => (
                                <FormControlLabel
                                    key={instructor.id}
                                    value={instructor.id.toString()}
                                    control={<Radio/>}
                                    label={
                                        <Box>
                                            <Typography variant="body1">
                                                {instructor.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                (Specjalizacja: {instructor.specialization})
                                            </Typography>
                                        </Box>
                                    }
                                    sx={{
                                        mb: 2,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        '& .MuiRadio-root': {
                                            pt: 0
                                        }
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </Box>
                </Box>
                <Box>
                    <WeeklyCalendar/>
                    <Button variant="contained" fullWidth sx={{mt: 3}} size="large">Umów spotkanie</Button>
                </Box>

            </Box>
        </Box>
    );
};

export default NewMeetingPage;