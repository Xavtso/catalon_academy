import styles from './Rate.module.scss';
import star from '../../../../assets/images/Testimonials/star.svg';

export default function Rate() {
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
