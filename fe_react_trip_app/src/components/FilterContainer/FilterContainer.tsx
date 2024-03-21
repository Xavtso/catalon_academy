import ButtonsFilter from "./ButtonsFilter/ButtonsFilter";
import FormFilter from "./FormFilter/FormFilter";
import styles from "./FilterContainer.module.scss";


export default function FilterContainer() {
  return (
    <div className={styles.content}>
      <p className={styles.headline}>
        Embark on <span>unforgettable</span> journeys with our travel agency,
        where each adventure is crafted with <span>precision</span> and{" "}
        <span>passion</span>.
      </p>
      
      <FormFilter />
      <ButtonsFilter />
    </div>
  );
}
