import axios from "axios";
import { tripsSliceActions } from "store/slices/tripsSlice";
import { AppDispatch } from "types";
const baseUrl =
  "https://react-trip-app-caf0c-default-rtdb.europe-west1.firebasedatabase.app";

export function getAllTrips() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/allTrips.json`);
      dispatch(tripsSliceActions.getTrips(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function getTripDetalis() {
  return async (dispatch: AppDispatch) => {
    try {
      const pathArray = window.location.pathname.split("/");
      const listIndex = pathArray[2];
      const tripIndex = pathArray[4];

      const response = await axios.get(
        `${baseUrl}/allTrips/${listIndex}/trips/${tripIndex}.json`,
      );

      dispatch(tripsSliceActions.setTripDetails(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}
