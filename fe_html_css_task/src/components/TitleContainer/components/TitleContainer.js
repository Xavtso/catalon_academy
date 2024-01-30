import SectionName from "../../../UI/SectionName";
import styles from "./TitleContainer.module.scss";

export default function TitleContainer({ info, center, titleStyle }) {
  const { tag, title, subtitle } = info;
  const titleClassNames = {
    big: styles.titleBig,
    bold: styles.titleBold,
  };

  const titleClass = titleClassNames[titleStyle] || styles.title;

  return (
    <div className={center && styles.content}>
      <SectionName tag={tag} />
      <h2 className={titleClass}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
