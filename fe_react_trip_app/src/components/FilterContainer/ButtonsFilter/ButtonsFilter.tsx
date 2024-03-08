import { FILTER_BUTTONS_DATA } from "contstants/filterData";
import styles from "./ButtonsFilter.module.scss";
import FilterButton from "UI/FilterButton";
import { useState } from "react";

export default function ButtonsFilter() {
  const btnData = FILTER_BUTTONS_DATA;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.buttonContainer}>
      {btnData.map((continent, index) => (
        <FilterButton
          key={index}
          isActive={activeIndex === index}
          title={continent.title}
          value={continent.value}
          setActiveBtn={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
