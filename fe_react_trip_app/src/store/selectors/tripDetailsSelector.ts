import { createSelector } from "reselect";
import { RootState } from "types";

const selectAllTrips = (state: RootState) => state.trips;

export const selectTripDetails = createSelector(
  [selectAllTrips],
  (allTrips) => {
    return allTrips.tripDetails;
  },
);
