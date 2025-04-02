import styles from "./Gift.module.css";

export default function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.box}></div>
      <div className={styles.bow1}></div>
      <div className={styles.bow2}></div>
    </div>
  );
}
