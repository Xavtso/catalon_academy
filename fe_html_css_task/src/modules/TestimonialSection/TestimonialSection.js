import styles from "./TestimonialSection.module.scss";
import CommentsList from "../../components/TestimonialSection";

export default function TestimonialSection() {
  const vector1 = "/assets/images/Testimonials/vector1.png";
  const vector2 = "/assets/images/Testimonials/vector2.png";

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.title}>A words from our customers</h2>
      <p className={styles.subtitle}>
        Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.
      </p>
      <CommentsList />
      <div className={styles.vectorImg1}>
        <img src={vector1} alt="vector" width="200" height="268" />
      </div>
      <div className={styles.vectorImg2}>
        <img src={vector2} alt="vector" width="280" height="142" />
      </div>
    </section>
  );
}
