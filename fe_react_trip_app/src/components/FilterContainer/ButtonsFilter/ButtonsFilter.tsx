import { useDispatch, useSelector } from "react-redux";
import styles from "./ButtonsFilter.module.scss";
import { AppDispatch, RootState } from "types";
import { tripsSliceActions } from "store/slices/tripsSlice";

export default function ButtonsFilter() {
  const continents = ["Africa", "America", "Asia", "Europe"];
  const dispatch = useDispatch<AppDispatch>();
  const { selectedContinent } = useSelector((state: RootState) => state.trips);

  function handleContinentChange(continent: string) {
    dispatch(tripsSliceActions.setContinent(continent));
  }

  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.btnFilter} ${
          selectedContinent === "" ? styles.active : ""
        }`}
        onClick={() => handleContinentChange("")}
      >
        All
      </button>
      {continents.map((continent) => (
        <button
          key={continent}
          className={`${styles.btnFilter} ${
            selectedContinent === continent ? styles.active : ""
          }`}
          onClick={() => handleContinentChange(continent)}
        >
          {continent}
        </button>
      ))}
    </div>
  );
}
