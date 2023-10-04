import { useEffect } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import TermPage from "../TermPage/TermPage";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  getCourseSchedulerTitle,
  setCourseSchedulerTitle,
  getCourseSchedulerTermCourses,
  setCourseSchedulerCourses,
  getCourseSchedulerSelectedCourses,
  getCourseSchedulerConflictedCourses,
} from "../../store/slices/courseSchedulerSlice";
import "./CourseScheduler.less";

const CourseScheduler = () => {
  const url =
    "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const dispatch = useAppDispatch();
  const title = useAppSelector(getCourseSchedulerTitle);
  const termCourses = useAppSelector(getCourseSchedulerTermCourses);
  const selectedCourses = useAppSelector(getCourseSchedulerSelectedCourses);
  const conflictedCourses = useAppSelector(getCourseSchedulerConflictedCourses);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch(setCourseSchedulerTitle(response.data.title));
        dispatch(setCourseSchedulerCourses(response.data.courses));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="course-scheduler">
      {title && <Banner title={title} />}
      {termCourses && (
        <TermPage
          termCourses={termCourses}
          selectedCourses={selectedCourses}
          conflictedCourses={conflictedCourses}
        />
      )}
    </div>
  );
};

export default CourseScheduler;
