import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: false,
  reducers: {
    toggle: (state) => !state,
  },
});
export const { toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
