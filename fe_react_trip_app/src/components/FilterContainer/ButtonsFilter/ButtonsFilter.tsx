import styles from "./ButtonsFilter.module.scss";
import FilterButton from "UI/FilterButton";

export default function ButtonsFilter() {
  const continents = ["All", "Africa", "America", "Asia", "Europe"];

  return (
    <div className={styles.buttonContainer}>
      {continents.map((continent,index) => (
        <FilterButton key={index} continent={continent} />
      ))}
    </div>
  );
}
