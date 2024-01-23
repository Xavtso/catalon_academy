import AuthorInfo from "../AuthorInfo/AuthorInfo";
import Rate from "../Rate/Rate";
import styles from './CommentCard.module.scss';

export default function CommentCard({ imageSrc, text, name, position }) {
  return (
    <div className={styles.commentCard}>
      <Rate />
      <p className={styles.feedback}>{text}</p>
      <AuthorInfo imageSrc={imageSrc} name={name} position={position} />
    </div>
  );
}
