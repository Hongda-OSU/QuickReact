import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import courseSchedulerReducer from "./slices/courseSchedulerSlice";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  courseScheduler: courseSchedulerReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export const persistor = persistStore(store);
