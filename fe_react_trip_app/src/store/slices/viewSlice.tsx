import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    isMobile: false,
  },
  reducers: {
    handleResize(state, action) {
      if (action.payload <= 500) {
        state.isMobile = true;
      } else state.isMobile = false;
    },
  },
});

export const viewSliceActions = viewSlice.actions;

export default viewSlice;
