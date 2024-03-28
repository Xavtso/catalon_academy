import styles from "./GoogleButton.module.scss";


export default function GoogleButton() {

  function handleGoogleLogin() {
    alert('Function not implemented')
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
