import styles from "./Header.module.scss";
import Message from "../../UI/Message";
import Navbar from "../Navbar";
import { useState } from "react";

export default function Header() {
    const [showMessage, setShowMessage] = useState(true);

    function handleMessage() {
      setShowMessage(!showMessage);
    }
  return (
    <header className={styles.container}>
      {showMessage ? <Message onClose={handleMessage} /> : null}
      <Navbar />
    </header>
  );
}
