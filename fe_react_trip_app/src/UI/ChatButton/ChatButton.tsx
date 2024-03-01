import styles from "./ChatButton.module.scss";

export default function ChatButton({ position }: { position: string }) {
  return (
    <div className={`${styles.imgFrame} ${styles[position]}`}>
      <img
        src="/assets/icons/shared/message.svg"
        alt="msgIcon"
        width="32"
        height="32"
      />
    </div>
  );
}
