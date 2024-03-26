import axios from "axios";
import { tripsSliceActions } from "store/slices/tripsSlice";
import { AppDispatch } from "types";
import firebaseConfig from "configs/Firebase";
const baseUrl = firebaseConfig.databaseURL;

export function getAllTrips() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/sortedTrips.json`);
      dispatch(tripsSliceActions.getTrips(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function getTripDetalis(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/allTrips/${id}.json`);

      dispatch(tripsSliceActions.setTripDetails(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}
