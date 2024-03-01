import { AppDispatch, RootState } from "types";
import { tripsSliceActions } from "store/slices/tripsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterButton.module.scss";

interface FilterButtonProps {
  continent: string;
}

export default function FilterButton({ continent }: FilterButtonProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedContinent } = useSelector((state: RootState) => state.trips);

  function handleContinentChange(continent: string) {
    dispatch(tripsSliceActions.setContinent(continent));
  }

  return (
    <button
      className={`${styles.btnFilter} ${
        selectedContinent === continent ? styles.active : ""
      }`}
      onClick={() => handleContinentChange(continent)}
    >
      {continent}
    </button>
  );
}
