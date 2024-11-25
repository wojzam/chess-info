import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CourseItem} from "./CourseItem.jsx";

const CoursePendingList = ({courses}) => {
    const [pendingCoursesList, setPendingCoursesList] = useState(courses);

    const handleAcceptCourse = (month, index) => {
        // TODO API call
        setPendingCoursesList((prevCourses) => {
            const updatedCourses = {...prevCourses};
            updatedCourses[month] = updatedCourses[month].filter((_, i) => i !== index);
            if (updatedCourses[month].length === 0) {
                delete updatedCourses[month];
            }
            return updatedCourses;
        });
    };

    const handleCancelCourse = (month, index) => {
        // TODO API call
        setPendingCoursesList((prevCourses) => {
            const updatedCourses = {...prevCourses};
            updatedCourses[month] = updatedCourses[month].filter((_, i) => i !== index);
            if (updatedCourses[month].length === 0) {
                delete updatedCourses[month];
            }
            return updatedCourses;
        });
    };

    return (
        <Box width="100%">
            {Object.keys(pendingCoursesList).map((month) => (
                <Accordion key={month} sx={{backgroundColor: 'transparent', mb: 2}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: 'transparent'}}>
                        <Typography variant="h5">{month}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {pendingCoursesList[month].length > 0 ? (
                            pendingCoursesList[month].map((course, index) => (
                                <CourseItem key={index} course={course}
                                            onAccept={() => handleAcceptCourse(month, index)}
                                            onCancel={() => handleCancelCourse(month, index)}/>
                            ))
                        ) : (
                            <Typography variant="h6" color="textSecondary">
                                Brak próśb kursów
                            </Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default CoursePendingList;