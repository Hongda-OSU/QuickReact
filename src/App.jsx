import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./components/Banner/Banner";
import TermPage from "./components/TermPage/TermPage";
import { useAppDispatch, useAppSelector } from "../src/store/hook";
import {
  getCourseSchedulerTitle,
  setCourseSchedulerTitle,
  getCourseSchedulerCourses,
  setCourseSchedulerCourses,
} from "../src/store/slices/courseSchedulerSlice";
import "./App.css";

const App = () => {
  const url =
    "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const dispatch = useAppDispatch();
  const title = useAppSelector(getCourseSchedulerTitle);
  const courses = useAppSelector(getCourseSchedulerCourses);

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
      {courses && <TermPage />}
    </div>
  );
};

export default App;
