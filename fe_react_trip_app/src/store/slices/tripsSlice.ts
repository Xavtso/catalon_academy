import { createSlice } from "@reduxjs/toolkit";

const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    continents: {
      Africa: [],
      America: [],
      Asia: [],
      Europe: [],
    },
  },
  reducers: {
    getTrips(state, action) {
      const { Africa, America, Asia, Europe } = action.payload;
      state.continents.Africa = Africa;
      state.continents.America = America;
      state.continents.Asia = Asia;
      state.continents.Europe = Europe;
    },
  },
});

export const tripsSliceActions = tripsSlice.actions;

export default tripsSlice;
