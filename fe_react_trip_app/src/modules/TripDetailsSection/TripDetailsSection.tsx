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
    const pathArray = window.location.pathname.split("/");
    const continent = pathArray[2];
    const tripIndex = pathArray[3];

    dispatch(getTripDetalis(continent, tripIndex));
  }, [dispatch]);

  return (
    <section className={styles.tripDetails}>
      <Container>
        {tripDetails && <TripDetailsMedia trip={tripDetails} />}
        {details && <JourneyDetails details={details} />}
        {details && <TripPoints tripPoints={details?.tripPoints} />}
      </Container>
    </section>
  );
}
