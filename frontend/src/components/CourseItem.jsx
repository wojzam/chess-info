import React from 'react';
import {Box, Button, Paper, Typography} from '@mui/material';

export const CourseItem = ({course, onCancel}) => {
    return (
        <Paper
            elevation={3}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                marginBottom: '1rem',
                backgroundColor: '#b5835a',
                color: '#fff',
            }}
        >
            <Box width="100%">
                <Box width="100%" display="flex" justifyContent="space-between">
                    <Typography variant="h5" fontWeight="light">
                        {course.date} - {course.time}
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#4f2e1e', color: '#fff'}} onClick={onCancel}>
                        Odwołaj
                    </Button>
                </Box>

                {course.user ? (
                        <Typography variant="h6">
                            {course.user.name} ({course.user.level})
                        </Typography>
                    ) :
                    <Typography variant="h6">
                        {course.instructor}
                    </Typography>
                }
            </Box>
        </Paper>
    );
};