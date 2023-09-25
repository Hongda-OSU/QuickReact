import Course from "../Course/Course";
import "./CourseList.less";

const CourseList = ({ termCourses, selectedCourses, conflictedCourses }) => {
  console.log(conflictedCourses)
  return (
    <div className="course-list">
      {Object.entries(termCourses).map(([courseKey, courseData]) => {
        const { term, number } = courseData;

        const isSelected =
          selectedCourses &&
          selectedCourses.some(
            (course) => course.number === number && course.term === term
          );

        const isConflicted =
          conflictedCourses &&
          conflictedCourses.some(
            (course) => course.number === number && course.term === term
          );

          console.log(isConflicted)

        return (
          <Course
            key={courseKey}
            term={term}
            number={number}
            title={courseData.title}
            meets={courseData.meets}
            isSelected={isSelected}
            isConflicted={isConflicted}
          />
        );
      })}
    </div>
  );
};

export default CourseList;
