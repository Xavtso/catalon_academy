import styles from "./TestimonialSection.module.scss";
import vector1 from "../../assets/images/Testimonials/vector1.png";
import vector2 from "../../assets/images/Testimonials/vector2.png";
import CommentsList from "../../components/TestimonialSection";

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.title}>A words from our customers</h2>
      <p className={styles.subtitle}>
        Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.
      </p>
      <CommentsList />
      <div className={styles.vectorImg1}>
        <img src={vector1} alt="vector" />
      </div>
      <div className={styles.vectorImg2}>
        <img src={vector2} alt="vector" />
      </div>
    </section>
  );
}
