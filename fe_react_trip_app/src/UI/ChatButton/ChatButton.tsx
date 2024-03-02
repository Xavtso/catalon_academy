import styles from "./ChatButton.module.scss";

export default function ChatButton() {
  return (
    <div className={styles.imgFrame}>
      <img
        src="/assets/icons/shared/message.svg"
        alt="msgIcon"
        width="32"
        height="32"
      />
    </div>
  );
}
