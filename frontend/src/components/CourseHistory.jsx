import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CourseItem} from "./CourseItem.jsx";

const CourseHistory = ({courses}) => {
    const [coursesList, setCoursesList] = useState(courses);

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
                                <CourseItem key={index} course={course}/>
                            ))
                        ) : (
                            <Typography variant="h6" color="textSecondary">
                                Brak spotkań
                            </Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default CourseHistory;