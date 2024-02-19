import axios from "axios";
import { tripsSliceActions } from "../store/slices/tripsSlice";
import { AppDispatch } from "../types";

export function getAllTrips() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        "https://react-trip-app-caf0c-default-rtdb.europe-west1.firebasedatabase.app/allTrips.json",
      );
      dispatch(tripsSliceActions.getTrips(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}
