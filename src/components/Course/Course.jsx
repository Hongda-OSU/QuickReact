import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import {
  getCourseSchedulerSelectedCourses,
  setCourseSchedulerSelectedCourses,
} from "../../store/slices/courseSchedulerSlice";
import "./Course.less";

const Course = ({ term, number, title, meets }) => {
  const dispatch = useAppDispatch();
  const selectedCourses = useAppSelector(getCourseSchedulerSelectedCourses);
  const isSelected =
    selectedCourses &&
    selectedCourses.some(
      (course) => course.number === number && course.term === term
    );

  const onCourseCardClicked = () => {
    if (isSelected) {
      const filteredCourses = selectedCourses.filter(
        (course) => !(course.number === number && course.term === term)
      );
      dispatch(setCourseSchedulerSelectedCourses(filteredCourses));
    } else {
      const updatedCourses = [
        ...(selectedCourses || []),
        { term, number, title, meets },
      ];
      dispatch(setCourseSchedulerSelectedCourses(updatedCourses));
    }
  };

  return (
    <Card
      variant="outlined"
      className={`course ${isSelected ? "selected" : ""}`}
      onClick={onCourseCardClicked}
    >
      <CardContent className="test">
        <Typography variant="h5" component="div" className="course-title">
          {term + " CS " + number}
        </Typography>
        <Typography variant="body1" className="course-content">
          {title}
        </Typography>
        <Divider light className="divider" />
        <Typography variant="body2" className="course-time">
          {meets}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Course;
