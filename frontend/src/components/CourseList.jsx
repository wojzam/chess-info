import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CourseItem} from "./CourseItem.jsx";

const CourseList = ({courses}) => {
    const [coursesList, setCoursesList] = useState(courses);

    const handleCancelCourse = (month, index) => {
        // TODO API call
        setCoursesList((prevCourses) => {
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
            {Object.keys(coursesList).map((month) => (
                <Accordion key={month} sx={{backgroundColor: 'transparent', mb: 2}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: 'transparent'}}>
                        <Typography variant="h5">{month}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {coursesList[month].length > 0 ? (
                            coursesList[month].map((course, index) => (
                                <CourseItem key={index} course={course}
                                            onCancel={() => handleCancelCourse(month, index)}/>
                            ))
                        ) : (
                            <Typography variant="h6" color="textSecondary">
                                Brak zaplanowanych kursów
                            </Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default CourseList;