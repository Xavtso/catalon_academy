import { createSlice } from "@reduxjs/toolkit";
import { ContinentType, Trip } from "types";

type InitialStateTypes = {
  allTrips: ContinentType[];
  filterValue: string;
  tripDetails: Trip;
};

const initialState: InitialStateTypes = {
  allTrips: [],
  filterValue: "",
  tripDetails: {} as Trip,
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    getTrips(state, action) {
      state.allTrips = action.payload;
    },
    setTripDetails(state, action) {
      state.tripDetails = action.payload;
    },
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const tripsSliceActions = tripsSlice.actions;

export default tripsSlice;
