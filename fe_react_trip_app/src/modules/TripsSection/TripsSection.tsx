import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrips } from "actions/tripsAction";
import { AppDispatch, RootState, FilterType } from "types";
import TripCardsList from "components/TripsList";
import styles from "./TripsSection.module.scss";
import FilterContainer from "components/FilterContainer";
import Container from "UI/Container";
import selectFilterSelector from "store/selectors/selectFilterSelector";

export default function TripsSection() {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedContinent } = useSelector((state: RootState) => state.trips);
  
  const { trips } = useSelector((state: RootState) =>
    selectFilterSelector(state)(selectedContinent as FilterType),
  );

  useEffect(() => {
    dispatch(getAllTrips());
  }, [dispatch]);


  return (
    <section>
      <Container>
        <FilterContainer />
        {Object.keys(trips)
          .map((continent) => (
            <div key={continent} className={styles.listsContainer}>
              <TripCardsList trips={trips[continent]} title={continent} />
            </div>
          ))
          .reverse()}
      </Container>
    </section>
  );
}
