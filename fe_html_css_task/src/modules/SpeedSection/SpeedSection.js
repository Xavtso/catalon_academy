import styles from "./SpeedSection.module.scss";
import TextContainer from "../../components/SpeedSection";
import ImageContainer from "../../UI/SectionImage";
import speedImage from "../../assets/images/Speed/IMAGEspeed.png";
import speedIcon from '../../assets/icons/Speed/speedIcon.png'


export default function SpeedSection() {
  const info = {
    percent: "86%",
    text: "Increased in sales",
    barIcon: speedIcon,
  };

  return (
    <section className={styles.speedSection}>
      <div className={styles.contentContainer}>
        <ImageContainer imageSrc={speedImage} info={info} />
        <TextContainer />
        <div className={styles.backIcon}></div>
      </div>
    </section>
  );
}
