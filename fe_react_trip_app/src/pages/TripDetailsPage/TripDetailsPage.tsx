import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "types";
import { useEffect } from "react";
import { getTripDetails } from "actions/tripsAction";
import TripDetailsMedia from "components/TripsDetailsMedia";
import Container from "UI/Container";
import JourneyDetails from "components/JourneyDetails";
import styles from "./TripDetailsPage.module.scss";
import TripPoints from "components/TripPoints";
import { useParams } from "react-router-dom";
import { selectTripDetails } from "store/selectors/tripDetailsSelector";
import NotFound from "components/NotFound";

export default function TripDetailsSection() {
  const dispatch = useDispatch<AppDispatch>();
  const tripDetails = useSelector(selectTripDetails);
  const details = tripDetails?.detailed;
  const params = useParams();

  useEffect(() => {
    dispatch(getTripDetails(params.id));
  }, [dispatch, params]);

  return (
    <section className={styles.tripDetails}>
      {details ? (
        <Container>
          <TripDetailsMedia trip={tripDetails} />
          <JourneyDetails details={details} />
          <TripPoints tripPoints={details.tripPoints} />
        </Container>
      ) : (
        <NotFound />
      )}
    </section>
  );
}
