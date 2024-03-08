import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "types";
import { useEffect } from "react";
import { getTripDetalis } from "actions/tripsAction";
import TripDetailsMedia from "components/TripsDetailsMedia";
import Container from "UI/Container";
import JourneyDetails from "components/JourneyDetails";
import styles from "./TripDetailsSection.module.scss";
import TripPoints from "components/TripPoints";

export default function TripDetailsSection() {
  const dispatch = useDispatch<AppDispatch>();
  const tripDetails = useSelector(
    (state: RootState) => state.trips.tripDetails,
  );
  const details = tripDetails?.detailed;

  useEffect(() => {
    dispatch(getTripDetalis());
  }, [dispatch]);

  return (
    <section className={styles.tripDetails}>
      {details ? (
        <Container>
          <TripDetailsMedia trip={tripDetails} />
          <JourneyDetails details={details} />
          <TripPoints tripPoints={details?.tripPoints} />
        </Container>
      ) : (
        <div> Error Kurwa</div>
      )}
    </section>
  );
}
