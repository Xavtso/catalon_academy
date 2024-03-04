import Container from "UI/Container";
import Contacts from "./Contacts/Contacts";
import NavLists from "./NavLists/NavLists";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.flexContainer}>
          <Contacts />
          <div className={styles.rule} />
          <NavLists />
        </div>
      </Container>
    </footer>
  );
}
