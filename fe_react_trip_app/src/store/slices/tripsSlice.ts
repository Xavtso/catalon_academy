import { createSlice } from "@reduxjs/toolkit";
import { ContinentType, TripType } from "types";

type InitialStateTypes = {
  allTrips: ContinentType[];
  filterValue: string;
  tripDetails: TripType;
  filteredTrips: ContinentType[];
};

const initialState: InitialStateTypes = {
  allTrips: [],
  filterValue: "",
  tripDetails: {} as TripType,
  filteredTrips: [],
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    getTrips(state, action) {
      state.allTrips = action.payload;
      state.filteredTrips = state.allTrips;
    },
    setTripDetails(state, action) {
      state.tripDetails = action.payload;
    },
    setFilteredTrips(state, action) {
      state.filteredTrips = state.allTrips.filter((trips) =>
        trips.continent.includes(action.payload),
      );
    },
  },
});

export const tripsSliceActions = tripsSlice.actions;

export default tripsSlice;
