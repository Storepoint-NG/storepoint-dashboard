import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
const store = configureStore({
  reducer: rootReducer, // Add your reducers here
});
export default store;
