import Button from "../../UI/Button";
import styles from "./VideoSection.module.scss";

export default function VideoSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Button btnClassName={styles.btnHero} text={"Watch Introduction"} />
      </div>
    </section>
  );
}
