import Button from "../../UI/Button";
import Container from "../../UI/Container";
import BlogCardsList from '../../components/BlogCards';
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
      <Container direction={'column'}>
        <TitleContainer info={data} center={true} titleStyle={"bold"} />
        <BlogCardsList />
        <Button text={"View all"} btnPlace={"blog"} />
      </Container>
    </section>
  );
}
