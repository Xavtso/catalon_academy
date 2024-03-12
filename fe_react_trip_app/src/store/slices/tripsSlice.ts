import { createSlice } from "@reduxjs/toolkit";
import { ContinentType, TripType } from "types";

type InitialStateTypes = {
  allTrips: ContinentType[];
  filterValue: string;
  tripDetails: TripType;
};

const initialState: InitialStateTypes = {
  allTrips: [],
  filterValue: "",
  tripDetails: {} as TripType,
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
