import { useEffect } from "react";
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
import { useDbData } from "../../helper/firebase";
import "./CourseScheduler.less";

const CourseScheduler = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector(getCourseSchedulerTitle);
  const termCourses = useAppSelector(getCourseSchedulerTermCourses);
  const selectedCourses = useAppSelector(getCourseSchedulerSelectedCourses);
  const conflictedCourses = useAppSelector(getCourseSchedulerConflictedCourses);
  const [data, error] = useDbData("/");

  useEffect(() => {
    if (data) {
      dispatch(setCourseSchedulerTitle(data.title));
      dispatch(setCourseSchedulerCourses(data.courses));
    } 
    if (error) {
      console.error(error);
    }
  }, [data, error]);

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
