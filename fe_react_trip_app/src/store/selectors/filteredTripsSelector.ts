import { createSelector } from "reselect";
import { RootState } from "types";

const selectAllTrips = (state: RootState) => state.trips.allTrips;
const selectFilterValue = (state: RootState) => state.trips.filterValue;

export const selectFilteredTrips = createSelector(
  [selectAllTrips, selectFilterValue],
  (allTrips, filterValue) => {
    return allTrips.filter((trip) => trip.continent.includes(filterValue));
  },
);
