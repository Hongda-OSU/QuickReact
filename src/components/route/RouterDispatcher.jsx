import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CourseScheduler from "../CourseScheduler/CourseScheduler";
import CourseForm from "../CourseForm/CourseForm";
import Login from "../Login/Login";
import { useProfile } from "../../helper/profile";

const RouteDispatcher = () => {
  const [profile] = useProfile();
  
  return (
    <BrowserRouter>
      {!profile.user && <Login />}
      <Routes>
        <Route path="/" element={<CourseScheduler />} />
        <Route path="/courses/:courseId" element={<CourseForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
