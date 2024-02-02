import ImageContainer from "../../UI/SectionImage";
import TextContent from "../../components/Efficient";

import styles from "./EfficientSection.module.scss";
import Container from "../../UI/Container";

export default function EfficientSection() {
  const efficientImage = "/assets/images/Efficient/efficient.jpg";
  const barIcon = "/assets/icons/Efficient/headIcon.png";

  const info = {
    percent: "74%",
    text: "Increased in productivity",
    barIcon: barIcon,
  };

  return (
    <section className={styles.efficientSection}>
      <Container direction={"row"}>
        <TextContent />
        <ImageContainer imageSrc={efficientImage} info={info} reversed={true} />
      </Container>
    </section>
  );
}
