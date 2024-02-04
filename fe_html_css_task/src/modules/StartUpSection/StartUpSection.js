import BtnGroup from "../../UI/BtnGroup";
import InfoCardsList from "../../components/StartUpSection";

import styles from "./StartUpSection.module.scss";

export default function StartUpSection() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.vector}>
          <img
            src="/assets/images/backgrounds/startUpVector.png"
            alt="bg-vector"
            // width="206px"
            // height="180px"
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Building your very own Startup has never been simpler
          </h2>
          <p className={styles.subtitle}>
            Aenean dui justo, tempus sed odio ut, convallis accumsan nunc.
            Phasellus mauris sem, porta eu turpis vel, maximus condimentum
            turpis.
          </p>
        </div>
        <InfoCardsList />
        <BtnGroup className={styles.btnbtn} />
      </div>
    </section>
  );
}
