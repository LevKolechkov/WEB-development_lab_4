import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer";

const store = configureStore({
  reducer: taskReducer,
});

export default store;
