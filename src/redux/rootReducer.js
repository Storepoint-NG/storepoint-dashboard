import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});
export default rootReducer;
