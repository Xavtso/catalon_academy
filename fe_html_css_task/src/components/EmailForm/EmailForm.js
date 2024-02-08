import Input from "../../UI/Input";
import Button from "../../UI/Button";
import styles from "./EmailForm.module.scss";

export default function EmailForm() {
  const vectorContact = "/assets/icons/backgrounds/vectorContact.svg";

  return (
    <div className={styles.container}>
      <div className={styles.vector}>
        <img
          src={vectorContact}
          alt="vectorContact"
        />
      </div>
      <div className={styles.contentBox}>
        <h1 className={styles.title}>
          Stay up to date with the latest news from the Startup world!
        </h1>
        <h3 className={styles.subtitle}>
          Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin
          rutrum, purus in convallis pharetra, risus leo sagittis.
        </h3>
        <div className={styles.formContainer}>
          <div className={styles.activeGroup}>
            <Input placeholder={"Enter your email"} />
            <Button btnPlace={"form"} text={"Subscribe"} />
          </div>
          <p className={styles.formPolicy}>
            By clicking Subscribe you're confirming that you agree with our
            Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
