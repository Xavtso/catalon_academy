import { createSlice } from "@reduxjs/toolkit";
import { TripType } from "types";



type InitialStateTypes = {
  continents: {
    Africa: TripType[];
    America: TripType[];
    Europe: TripType[];
    Asia: TripType[];
  };
  selectedContinent: string;
  tripDetails: TripType | null;
};

const initialState: InitialStateTypes = {
  continents: {
    Africa: [],
    America: [],
    Asia: [],
    Europe: [],
  },
  selectedContinent: "All",
  tripDetails: null,
};


const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    getTrips(state, action) {
      const { Africa, America, Asia, Europe } = action.payload;
      state.continents.Africa = Africa;
      state.continents.America = America;
      state.continents.Asia = Asia;
      state.continents.Europe = Europe;
    },
    setContinent(state,action) {
      state.selectedContinent = action.payload;
    },
    setTripDetails(state, action) {
      state.tripDetails = action.payload
    }
  },
});

export const tripsSliceActions = tripsSlice.actions;

export default tripsSlice;
