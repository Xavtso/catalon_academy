// import Container from "UI/Container"; // Smth happened with it
import styles from "./AuthPage.module.scss";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <section className={styles.authPage}>
      <div className={styles.authContainer}>
        <Outlet />
      </div>
    </section>
  );
}
