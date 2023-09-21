import Course from "../Course/Course";

const CourseList = ({ courses }) => {
  return (
    <div>
      {Object.entries(courses).map(([courseKey, courseData]) => (
        <Course term={courseData.term} number={courseData.number} title={courseData.title} />
      ))}
    </div>
  );
};

export default CourseList;
