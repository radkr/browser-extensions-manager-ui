import styles from "./control-bar.module.css";

export default function ControlBar() {
  return (
    <div className={styles.controlBar}>
      <h1 className={styles.title}>Extensions List</h1>
      <div className={styles.filter}>
        <button className={`${styles.button} ${styles.buttonSelected}`}>
          All
        </button>
        <button className={styles.button}>Active</button>
        <button className={styles.button}>Inactive</button>
      </div>
    </div>
  );
}
