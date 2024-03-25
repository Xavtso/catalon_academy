// import Container from "UI/Container"; // Smth happened with it
import SignUp from "components/SignUp";
import styles from "./AuthPage.module.scss";

export default function AuthPage() {
  return (
    <section className={styles.authPage}>
      <div className={styles.authContainer}>
        <SignUp />
      </div>
    </section>
  );
}
