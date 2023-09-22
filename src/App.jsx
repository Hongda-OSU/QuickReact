import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./components/Banner/Banner";
import CourseList from "./components/CourseList/CourseList";
import "./App.css";

const App = () => {
  const url =
    "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const [title, setTitle] = useState();
  const [courses, setCourses] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setTitle(response.data.title);
        setCourses(response.data.courses);
      } catch (err) {
        console.error(err)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      {title && <Banner title={title} />}
      {courses && <CourseList courses={courses} />}
    </div>
  );
};

export default App;
