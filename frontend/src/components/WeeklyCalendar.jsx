import React, {useState} from 'react';
import {Box, Button, IconButton, Paper, Stack, Typography, useTheme} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const WeeklyCalendar = () => {
    const theme = useTheme();
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState(null);

    const getWeekDates = (date) => {
        const week = [];
        const start = new Date(date);
        start.setDate(start.getDate() - start.getDay() + 1); // Start from Monday

        for (let i = 0; i < 5; i++) {
            const day = new Date(start);
            day.setDate(start.getDate() + i);
            week.push(day);
        }
        return week;
    };

    const formatDate = (date) => {
        return `${date.getDate()} ${date.toLocaleString('default', {month: 'short'})}`;
    };

    const hours = Array.from({length: 6}, (_, i) => {
        const hour = 14 + i;
        return `${hour}:00`;
    });

    const navigateWeek = (direction) => {
        const newDate = new Date(currentWeek);
        newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
        setCurrentWeek(newDate);
    };

    const handleSlotClick = (date, hour) => {
        const slotId = `${date.toISOString()}-${hour}`;
        setSelectedSlot(selectedSlot === slotId ? null : slotId);
    };

    const isSlotSelected = (date, hour) => {
        const slotId = `${date.toISOString()}-${hour}`;
        return selectedSlot === slotId;
    };

    return (
        <Paper
            elevation={3}
            sx={{
                maxWidth: '800px',
                p: 3,
                borderRadius: 4
            }}
        >
            {/* Header with navigation */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    bgcolor: theme.palette.background.default,
                    borderRadius: 2,
                    p: 1
                }}
            >
                <IconButton
                    onClick={() => navigateWeek('prev')}
                    sx={{color: 'primary.main'}}
                >
                    <ChevronLeftIcon/>
                </IconButton>

                <Stack
                    direction="row"
                    sx={{
                        flex: 1,
                        justifyContent: 'space-around'
                    }}
                >
                    {getWeekDates(currentWeek).map((date, index) => (
                        <Box key={index} sx={{textAlign: 'center'}}>
                            <Typography variant="subtitle2" sx={{color: 'primary.main'}}>
                                {date.toLocaleString('default', {weekday: 'short'})}
                            </Typography>
                            <Typography variant="caption" sx={{color: 'text.secondary'}}>
                                {formatDate(date)}
                            </Typography>
                        </Box>
                    ))}
                </Stack>

                <IconButton
                    onClick={() => navigateWeek('next')}
                    sx={{color: 'primary.main'}}
                >
                    <ChevronRightIcon/>
                </IconButton>
            </Box>

            {/* Time slots */}
            <Stack spacing={2}>
                {hours.map((hour) => (
                    <Stack
                        key={hour}
                        direction="row"
                        spacing={1}
                    >
                        {getWeekDates(currentWeek).map((date, index) => (
                            <Button
                                key={`${hour}-${index}`}
                                variant={isSlotSelected(date, hour) ? "contained" : "outlined"}
                                onClick={() => handleSlotClick(date, hour)}
                                sx={{
                                    flex: 1,
                                    textTransform: 'none',
                                    py: 1,
                                    '&:hover': {
                                        bgcolor: isSlotSelected(date, hour)
                                            ? 'primary.dark'
                                            : 'primary.light',
                                    },
                                }}
                            >
                                {hour}
                            </Button>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </Paper>
    );
};

export default WeeklyCalendar;