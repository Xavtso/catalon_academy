import styles from "./GoogleButton.module.scss";

export default function GoogleButton() {
  return (
    <button type="submit" className={styles.googleBtn}>
      Log In With Google
    </button>
  );
}
