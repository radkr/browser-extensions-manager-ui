import styles from "./secondary-button.module.css";

export default function SecondaryButton({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
