import InfoBar from "../InfoBar";
import styles from "./ImageContainer.module.scss";

export default function ImageContainer({ info, imageSrc, reversed }) {
  return (
    <div
      className={styles.imageContainer}
      style={{ background: `url(${imageSrc})` }}
    >
      <InfoBar info={info} reversed={reversed} />
    </div>
  );
}
