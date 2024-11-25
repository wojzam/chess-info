import React from 'react';
import {Box, Typography} from '@mui/material';
import {userCourses} from "../const/SampleData.jsx";
import CourseHistory from "../components/CourseHistory.jsx";

const CourseHistoryPage = () => {
    return (
        <Box width="100%">
            <Typography variant="h4" sx={{mb: 3, fontWeight: 'bold', color: '#000'}}>
                Historia spotkań
            </Typography>
            <CourseHistory courses={userCourses}/>
        </Box>
    );
};

export default CourseHistoryPage;