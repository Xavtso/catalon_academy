import { googleLogin } from "store/thunks";
import styles from "./GoogleButton.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "types";

export default function GoogleButton() {
  const dispatch = useDispatch<AppDispatch>();
  function handleGoogleLogin() {
    dispatch(googleLogin());
  }

  return (
    <button
      type="submit"
      className={styles.googleBtn}
      onClick={handleGoogleLogin}
    >
      Log In With Google
    </button>
  );
}
