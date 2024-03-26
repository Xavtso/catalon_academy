import { googleLogin } from "actions/authActions";
import styles from "./GoogleButton.module.scss";

export default function GoogleButton() {
  return (
    <button type="submit" className={styles.googleBtn} onClick={() => googleLogin()}>
      Log In With Google
    </button>
  );
}
