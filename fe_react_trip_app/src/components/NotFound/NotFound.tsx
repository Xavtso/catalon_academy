import Button from "UI/Button";

import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <section className={styles.notfound}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2>Sorry,seems like we can't fetch any data for this page</h2>
          <h3>Please let us know about this problem</h3>
        </div>
        <div className={styles.btnContainer}>
          <Button
            size="fullSize"
            fillType="filled"
            title="Contact Us"
            onClick={() => ""}
          />
        </div>
      </div>
    </section>
  );
}
