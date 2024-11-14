import React from 'react';
import {Box, Typography} from '@mui/material';
import {instructorCourses} from "../const/SampleData.jsx";
import CourseList from "../components/CourseList.jsx";

const InstructorCoursesPage = () => {
    return (
        <Box width="100%">
            <Typography variant="h4" sx={{mb: 3, fontWeight: 'bold', color: '#000'}}>
                Zaplanowane kursy
            </Typography>
            <CourseList courses={instructorCourses}/>
        </Box>
    );
};

export default InstructorCoursesPage;