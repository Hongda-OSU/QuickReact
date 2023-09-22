import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import courseSchedulerReducer from "./slices/courseSchedulerSlice";

const reducer = {
  courseScheduler: courseSchedulerReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
