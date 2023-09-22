import Course from "../Course/Course";
import "./CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {Object.entries(courses).map(([courseKey, courseData]) => (
        <Course
          key={courseKey}
          term={courseData.term}
          number={courseData.number}
          title={courseData.title}
          meets={courseData.meets}
        />
      ))}
    </div>
  );
};

export default CourseList;
