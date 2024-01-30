import Button from "../../UI/Button";
import BlogCardsList from "../../components/BlogCards";
import TitleContainer from "../../components/TitleContainer";
import styles from "./BlogSection.module.scss";

export default function BlogSection() {
  const data = {
    tag: "Blog",
    title: "Our latest blogs",
    subtitle: "Accumsan semper euismod dolor vitae metus.",
  };
  return (
    <section className={styles.blogSection}>
      <div className={styles.contentContainer}>
        <TitleContainer info={data} center={true} titleStyle={'bold'} />
        <BlogCardsList />
        <Button text={"View all"} btnClassName={styles.btnView} />
      </div>
    </section>
  );
}
