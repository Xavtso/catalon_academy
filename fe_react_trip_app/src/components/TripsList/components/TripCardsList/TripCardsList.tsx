import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrips } from "../../../../actions/tripsAction";
import { AppDispatch, PlaceType, RootState } from "../../../../types";
import { url } from "inspector";

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
      {Europe.map((place: PlaceType, index) => (
        <div key={index}>
          <h1>{place.city}</h1>
          <h2>{place.dates}</h2>
          
          <div
            style={{
              backgroundImage: `url(${place.imageSrc})`,
              width: "360px",
              height: "180px",
              backgroundSize: 'cover',
              backgroundPosition:'center'
            }}
          ></div>
          <p>{place.totalPrice}</p>
          <p>{place.detailed}</p>
        </div>
      ))}
    </div>
  );
}
