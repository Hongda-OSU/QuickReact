import { useEffect } from "react";
import axios from "axios";
import Banner from "./components/Banner/Banner";
import TermPage from "./components/TermPage/TermPage";
import { useAppDispatch, useAppSelector } from "../src/store/hook";
import {
  getCourseSchedulerTitle,
  setCourseSchedulerTitle,
  getCourseSchedulerTermCourses,
  setCourseSchedulerCourses,
  getCourseSchedulerSelectedCourses,
  getCourseSchedulerConflictedCourses,
} from "../src/store/slices/courseSchedulerSlice";
import "./App.less";

const App = () => {
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
    <div className="app">
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

export default App;
