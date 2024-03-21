import { AppDispatch, FilterButtonProps } from "types";
import { tripsSliceActions } from "store/slices/tripsSlice";
import { useDispatch } from "react-redux";
import styles from "./FilterButton.module.scss";


export default function FilterButton({
  title,
  value,
  isActive,
  setActiveBtn,
}: FilterButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  function handleContinentChange(value: string) {
    setActiveBtn();
    dispatch(tripsSliceActions.setFilterValue(value));
  }

  return (
    <button
      className={`${styles.btnFilter} ${isActive ? styles.active : ""}`}
      onClick={() => handleContinentChange(value)}
    >
      {title}
    </button>
  );
}
