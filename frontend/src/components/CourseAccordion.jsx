import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CourseItem} from "./CourseItem.jsx";

const CourseAccordion = ({courses, actions, emptyText}) => (
    <Box width="100%">
        {Object.keys(courses).map((month) => (
            <Accordion key={month} sx={{backgroundColor: 'transparent', mb: 2}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: 'transparent'}}>
                    <Typography variant="h5">{month}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {courses[month].length > 0 ? (
                        courses[month].map((course, index) => (
                            <CourseItem
                                key={index}
                                course={course}
                                {...(actions && actions(month, index))}
                            />
                        ))
                    ) : (
                        <Typography variant="h6" color="textSecondary">
                            {emptyText}
                        </Typography>
                    )}
                </AccordionDetails>
            </Accordion>
        ))}
    </Box>
);

export default CourseAccordion;
