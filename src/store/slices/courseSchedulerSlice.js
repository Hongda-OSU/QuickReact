import { createSlice } from "@reduxjs/toolkit";
import { terms } from "../../helper/contract";
import { hasCourseConflict } from "../../helper/helper";

const initialState = {
  term: 0,
  title: undefined,
  courses: undefined,
  termCourses: undefined,
  selectedCourses: [],
  conflictedCourses: [],
};

const setCourseSchedulerTermReducer = (state, action) => {
  state.term = action.payload;
  state.termCourses = Object.keys(state.courses)
    .filter(
      (courseKey) => state.courses[courseKey].term === terms[action.payload]
    )
    .reduce((obj, key) => {
      obj[key] = state.courses[key];
      return obj;
    }, {});
};

const setCourseSchedulerTitleReducer = (state, action) => {
  state.title = action.payload;
};

const setCourseSchedulerCoursesReducer = (state, action) => {
  state.courses = action.payload;
  state.termCourses = Object.keys(state.courses)
    .filter((courseKey) => state.courses[courseKey].term === terms[state.term])
    .reduce((obj, key) => {
      obj[key] = state.courses[key];
      return obj;
    }, {});
};

const setCourseSchedulerSelectedCoursesReducer = (state, action) => {
  const courseSelected = action.payload;

  const isCourseSelected = state.selectedCourses.some(
    (course) => course.title === courseSelected.title
  );

  const termCoursesArray = Object.values(state.termCourses);

  if (isCourseSelected) {
    state.selectedCourses = state.selectedCourses.filter(
      (course) => course.title !== courseSelected.title
    );

    const coursesConflicted = termCoursesArray.filter((course) =>
      hasCourseConflict(course, courseSelected)
    );

    state.conflictedCourses = state.conflictedCourses.filter(
      (conflictCourse) =>
        !coursesConflicted.some(
          (course) => course.title === conflictCourse.title
        )
    );
  } else {
    state.selectedCourses.push(courseSelected);

    const coursesConflicted = termCoursesArray.filter(
      (course) =>
        course.title !== courseSelected.title &&
        hasCourseConflict(course, courseSelected)
    );

    state.conflictedCourses.push(...coursesConflicted);
  }
};

export const courseSchedulerSlice = createSlice({
  name: "courseScheduler",
  initialState,
  reducers: {
    setCourseSchedulerTerm: setCourseSchedulerTermReducer,
    setCourseSchedulerTitle: setCourseSchedulerTitleReducer,
    setCourseSchedulerCourses: setCourseSchedulerCoursesReducer,
    setCourseSchedulerSelectedCourses: setCourseSchedulerSelectedCoursesReducer,
  },
});

export const {
  setCourseSchedulerTerm,
  setCourseSchedulerTitle,
  setCourseSchedulerCourses,
  setCourseSchedulerSelectedCourses,
} = courseSchedulerSlice.actions;

export const getCourseSchedulerTerm = (state) => state.courseScheduler.term;
export const getCourseSchedulerTitle = (state) => state.courseScheduler.title;
export const getCourseSchedulerCourses = (state) =>
  state.courseScheduler.courses;
export const getCourseSchedulerTermCourses = (state) =>
  state.courseScheduler.termCourses;
export const getCourseSchedulerSelectedCourses = (state) =>
  state.courseScheduler.selectedCourses;
export const getCourseSchedulerConflictedCourses = (state) =>
  state.courseScheduler.conflictedCourses;

export default courseSchedulerSlice.reducer;
