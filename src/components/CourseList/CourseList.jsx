import Course from "../Course/Course";
import { useAppSelector } from "../../store/hook";
import { getCourseSchedulerTermCourses } from "../../store/slices/courseSchedulerSlice";
import "./CourseList.css";

const CourseList = () => {
  const courses = useAppSelector(getCourseSchedulerTermCourses);
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