import { createSlice } from "@reduxjs/toolkit";

const terms = ["Fall", "Winter", "Spring"];

const initialState = {
  term: 0,
  title: undefined,
  courses: undefined,
  termCourses: undefined,
  selectedCourses: undefined,
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
  state.selectedCourses = action.payload;
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
export const getCourseSchedulerSelectedCourses = (state) =>
  state.courseScheduler.selectedCourses;
export const getCourseSchedulerTermCourses = (state) =>
  state.courseScheduler.termCourses;

export default courseSchedulerSlice.reducer;
