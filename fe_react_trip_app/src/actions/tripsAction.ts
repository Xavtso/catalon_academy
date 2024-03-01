import axios from "axios";
import { tripsSliceActions } from "@slices/tripsSlice";
import { AppDispatch } from "@types";
const baseUrl =
  "https://react-trip-app-caf0c-default-rtdb.europe-west1.firebasedatabase.app";


export function getAllTrips() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `${baseUrl}/allTrips.json`,
      );
      console.log(response.data);
      dispatch(tripsSliceActions.getTrips(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}


export function getTripDetalis(continent:string, tripIndex:string) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/allTrips/${continent}/${tripIndex}.json`);
      dispatch(tripsSliceActions.setTripDetails(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}



