import React, {useState} from 'react';
import CourseAccordion from './CourseAccordion';

const CourseHistory = ({courses}) => {
    const [coursesList, setCoursesList] = useState(courses);

    return (
        <CourseAccordion
            courses={coursesList}
            emptyText="Brak spotkań"
        />
    );
};

export default CourseHistory;
