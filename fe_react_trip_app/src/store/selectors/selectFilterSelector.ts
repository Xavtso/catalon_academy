import { createSelector } from "reselect";
import { FilterType, RootState, TripType } from "types";

const selectTripsState = (state: RootState) => state.trips;

const selectFilterSelector = createSelector(
  [selectTripsState],
  (trips) => (filter: FilterType) => {
    let filteredTrips: { [key: string]: TripType[] } = {};

    if (filter === "All") {
      const continents = Object.keys(trips.continents);

      continents.forEach((continent) => {
        filteredTrips[continent] = [
          ...trips.continents[continent as keyof typeof trips.continents],
        ];
      });
    } else {
      filteredTrips = { [filter]: [...(trips.continents[filter] || [])] };
    }

    return { trips: filteredTrips };
  },
);

export default selectFilterSelector;
