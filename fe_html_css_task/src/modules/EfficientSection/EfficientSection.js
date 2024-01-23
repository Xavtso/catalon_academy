import ImageContainer from "../../UI/SectionImage";
import TextContent from "../../components/Efficient";
import efficientImage from "../../images/Efficient/IMAGEefficient.jpg";
import barIcon from "../../images/Efficient/image 4head.png";
import styles from './EfficientSection.module.scss';

export default function EfficientSection() {
  const info = {
    percent: "74%",
    text: "Increased in productivity",
    barIcon: barIcon,
  };

  return (
    <section className={styles.efficientSection}>
      <div className={styles.contentContainer}>
        <TextContent />
              <ImageContainer imageSrc={efficientImage} info={info} reversed={true} />
      </div>
    </section>
  );
}
