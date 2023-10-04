import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CourseScheduler from "../CourseScheduler/CourseScheduler";
import CourseForm from "../CourseForm/CourseForm";

const RouteDispatcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseScheduler />} />
        <Route path="/course/:courseId/edit" element={<CourseForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
