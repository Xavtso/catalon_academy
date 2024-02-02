import styles from './Rate.module.scss';


export default function Rate() {
  const star = "/assets/images/Testimonials/star.svg";

  return (
    <div className={styles.rateContainer}>
      <img src={star} alt="Star"></img>
      <img src={star} alt="Star"></img>
      <img src={star} alt="Star"></img>
      <img src={star} alt="Star"></img>
      <img src={star} alt="Star"></img>
    </div>
  );
}
