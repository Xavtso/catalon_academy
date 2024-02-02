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
    <>
      {showMessage ? <Message onClose={handleMessage} /> : null}
      <header className={styles.container}>
        <Navbar />
      </header>
    </>
  );
}
