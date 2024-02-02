import styles from "./SpeedSection.module.scss";
import TextContainer from "../../components/SpeedSection";
import ImageContainer from "../../UI/SectionImage";

import Container from "../../UI/Container";

export default function SpeedSection() {
  const speedImage = "/assets/images/Speed/speed.png";
  const speedIcon = "/assets/icons/Speed/speedIcon.png";
  const info = {
    percent: "86%",
    text: "Increased in sales",
    barIcon: speedIcon,
  };

  return (
    <section className={styles.speedSection}>
      <Container direction={"row"}>
        <ImageContainer imageSrc={speedImage} info={info} />
        <TextContainer />
        <div className={styles.backIcon}></div>
      </Container>
    </section>
  );
}
