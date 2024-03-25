import styles from "./Divider.module.scss";

export default function Divider() {
  return (
    <div className={styles.dividerContainer}>
      <hr />
      <p>Or</p>
      <hr />
    </div>
  );
}
