import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assigments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  },
});
export default store;