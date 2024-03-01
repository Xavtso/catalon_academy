import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrips } from "actions/tripsAction";
import { AppDispatch, TripType, RootState } from "types";
import TripCardsList from "components/TripsList";
import styles from "./TripsSection.module.scss";
import FilterContainer from "components/FilterContainer";
import Container from "UI/Container";

export default function TripsSection() {
  const { selectedContinent } = useSelector((state: RootState) => state.trips);
  const dispatch = useDispatch<AppDispatch>();
  const tripsByContinent: { [key: string]: TripType[] } = useSelector(
    (state: RootState) => state.trips.continents,
  );

  useEffect(() => {
    dispatch(getAllTrips());
  }, [dispatch]);

  const filterTripsByContinent = (continent: string) => {
    if (continent === "All") {
      return Object.keys(tripsByContinent)
        .map((key) => tripsByContinent[key])
        .flat();
    }
    return tripsByContinent[continent] || [];
  };

  const filteredTrips = filterTripsByContinent(selectedContinent);

  const renderTripsByContinent = () => {
    if (selectedContinent === "All") {
      return Object.keys(tripsByContinent)
        .map((continent: string) => (
          <div key={continent} className={styles.listsContainer}>
            <h4 className={styles.title}>{continent}</h4>
            <TripCardsList trips={tripsByContinent[continent]} />
          </div>
        ))
        .reverse();
    }

    return (
      <div className={styles.listsContainer}>
        <h4 className={styles.title}>{selectedContinent}</h4>
        <TripCardsList trips={filteredTrips} />
      </div>
    );
  };

  return (
    <section>
      <Container>
        <FilterContainer />
        {renderTripsByContinent()}
      </Container>
    </section>
  );
}
