import styles from "./MainCard.module.scss";
import darkCard from "../../../images/Pricing/image 7darkCard.png";
import DarkMark from "../../../images/icons/Pricing/DarkMark";

export default function MainCard({ info }) {
  const { plan, priceMonth, priceYear, listItems } = info;
  const [amount, unit] = priceMonth?.match(/(\$\d+)\s*\/(\w+)/).slice(1);

  return (
    <div className={styles.mainCard}>
      <div className={styles.contentContainer}>
        <div className={styles.cardIcon}>
          <img src={darkCard} alt="cardIcon" />
        </div>
        <div className={styles.priceContainer}>
          <h3 className={styles.plan}>{plan}</h3>
          <h1 className={styles.priceMonth}>
            {amount}
            <span className={styles.month}>/{unit}</span>
          </h1>
          <h4 className={styles.priceYear}>{priceYear}</h4>
        </div>
        <hr className={styles.rule}></hr>
        <div className={styles.listContainer}>
          <p className={styles.listLabel}>Includes:</p>
          <ul className={styles.itemsList}>
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <DarkMark /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className={styles.cardBtn}>Get started</button>
    </div>
  );
}
