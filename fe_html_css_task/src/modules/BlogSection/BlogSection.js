import Button from "../../UI/Button";
import SectionName from "../../UI/SectionName";
import BlogCardsList from "../../components/BlogCards";
import styles from "./BlogSection.module.scss";

export default function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <SectionName sectionName={"Blog"} />
          <h1 className={styles.title}>Our latest blogs</h1>
          <p className={styles.subtitle}>
            Accumsan semper euismod dolor vitae metus.
          </p>
        </div>
        <BlogCardsList />
        <Button text={"View all"} btnClassName={styles.btnView} />
      </div>
    </section>
  );
}
