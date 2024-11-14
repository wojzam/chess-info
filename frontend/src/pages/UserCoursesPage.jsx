import React from 'react';
import {Box, Typography} from '@mui/material';
import {userCourses} from "../const/SampleData.jsx";
import CourseList from "../components/CourseList.jsx";

const UserCoursesPage = () => {
    return (
        <Box width="100%">
            <Typography variant="h4" sx={{mb: 3, fontWeight: 'bold', color: '#000'}}>
                Zaplanowane spotkania
            </Typography>
            <CourseList courses={userCourses}/>
        </Box>
    );
};

export default UserCoursesPage;