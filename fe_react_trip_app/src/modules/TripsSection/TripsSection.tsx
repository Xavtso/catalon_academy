import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrips } from "actions/tripsAction";
import { AppDispatch} from "types";
import TripCardsList from "components/TripsList";
import styles from "./TripsSection.module.scss";
import FilterContainer from "components/FilterContainer";
import Container from "UI/Container";
import { selectFilteredTrips } from "store/selectors/filteredTripsSelector";

export default function TripsSection() {
  const dispatch = useDispatch<AppDispatch>();
  const filteredTrips = useSelector(selectFilteredTrips);

  useEffect(() => {
    dispatch(getAllTrips());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <FilterContainer />
        {filteredTrips.map((continent, index) => (
          <div key={index} className={styles.listsContainer}>
            <TripCardsList
              listIndex={index}
              trips={continent.trips}
              title={continent.continent}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}
