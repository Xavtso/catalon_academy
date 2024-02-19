import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrips } from "../../../../actions/tripsAction";
import { AppDispatch, PlaceType, RootState } from "../../../../types";

export default function TripCardsList() {
  const dispatch = useDispatch<AppDispatch>();
  const { Africa, Asia, America, Europe } = useSelector(
    (state: RootState) => state.trips.continents,
  );

  useEffect(() => {
    dispatch(getAllTrips());
  }, [dispatch]);

  return (
    <div>
      {Africa.map((place: PlaceType) => (
        <div key={place.id}>
          <h1>{place.city}</h1>
          <h2>{place.Dates}</h2>
          <p>{place.TotalPrice}</p>
          <p>{place.Detailed}</p>
        </div>
      ))}
    </div>
  );
}
