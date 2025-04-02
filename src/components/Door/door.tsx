import styles from "./Door.module.css";

export default function Door(props) {
  return (
    <div className={styles.area}>
      <div className={styles.frame}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
