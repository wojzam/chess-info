import React, {useState} from 'react';
import CourseAccordion from './CourseAccordion';

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

    const actions = (month, index) => ({
        onAccept: () => handleAcceptCourse(month, index),
        onCancel: () => handleCancelCourse(month, index),
    });

    return (
        <CourseAccordion
            courses={pendingCoursesList}
            actions={actions}
            emptyText="Brak próśb kursów"
        />
    );
};

export default CoursePendingList;
