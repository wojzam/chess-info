import React from 'react';
import {Box, Typography} from '@mui/material';
import {instructorCourses, instructorCoursesPending} from "../const/SampleData.jsx";
import CourseList from "../components/CourseList.jsx";
import CoursePendingList from "../components/CoursePendingList.jsx";

const InstructorCoursesPage = () => {
    return (
        <Box width="100%">
            <Typography variant="h4" sx={{mb: 3, fontWeight: 'bold', color: '#000'}}>
                Prośby kursu
            </Typography>
            <CoursePendingList courses={instructorCoursesPending}/>
            <Typography variant="h4" sx={{mt: 8, mb: 3, fontWeight: 'bold', color: '#000'}}>
                Zaplanowane kursy
            </Typography>
            <CourseList courses={instructorCourses}/>
        </Box>
    );
};

export default InstructorCoursesPage;