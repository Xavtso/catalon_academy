import BtnGroup from "../../../UI/BtnGroup";
import TitleContainer from "../../TitleContainer";
import CardsList from "../CardsList";
import styles from "./TextContent.module.scss";

export default function TextContent() {
  const data = {
    tag: "Efficient",
    title: "Straight to the point",
    subtitle:
      "Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna. Aenean consequat risus tortor, quis porta.",
  };

  return (
    <div className={styles.textContainer}>
      <TitleContainer info={data}/>
      <CardsList />
      <BtnGroup />
    </div>
  );
}
