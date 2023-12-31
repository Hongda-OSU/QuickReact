import { useEffect } from "react";
import Banner from "../Banner/Banner";
import TermPage from "../TermPage/TermPage";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  getCourseSchedulerTitle,
  setCourseSchedulerTitle,
  getCourseSchedulerTermCourses,
  setCourseSchedulerCourses,
  getCourseSchedulerSelectedCourses,
  getCourseSchedulerConflictedCourses,
} from "../../store/slices/courseSchedulerSlice";
import { useDbData, signOut } from "../../helper/firebase";
import { useProfile } from "../../helper/profile";
import "./CourseScheduler.less";

const CourseScheduler = () => {
  const dispatch = useAppDispatch();
  const [profile, profileError] = useProfile();
  const [data, error] = useDbData("/");
  const title = useAppSelector(getCourseSchedulerTitle);
  const termCourses = useAppSelector(getCourseSchedulerTermCourses);
  const selectedCourses = useAppSelector(getCourseSchedulerSelectedCourses);
  const conflictedCourses = useAppSelector(getCourseSchedulerConflictedCourses);

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
    <div className="course-scheduler" data-cy="course">
      {profile.user && (
        <Button className="signout-button" onClick={signOut}>
          Sign Out
        </Button>
      )}
      {title && <Banner title={title} />}
      {termCourses && (
        <TermPage
          termCourses={termCourses}
          selectedCourses={selectedCourses}
          conflictedCourses={conflictedCourses}
          isAdmin={profile.isAdmin}
        />
      )}
    </div>
  );
};

export default CourseScheduler;
