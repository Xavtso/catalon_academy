import BtnGroup from "../../../UI/BtnGroup";
import SectionName from "../../../UI/SectionName";
import CardsList from "../CardsList";
import styles from "./TextContent.module.scss";

export default function TextContent() {
  return (
    <div className={styles.textContainer}>
      <SectionName sectionName={"Efficient"} />
      <h2 className={styles.title}>Straight to the point</h2>
      <p className={styles.subtitle}>
        Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed
        urna. Aenean consequat risus tortor, quis porta.
      </p>
      <CardsList />
      <BtnGroup />
    </div>
  );
}
