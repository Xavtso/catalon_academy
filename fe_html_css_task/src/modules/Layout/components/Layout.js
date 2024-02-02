import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.pageContent}>{children}</main>
      <Footer />
    </>
  );
}
