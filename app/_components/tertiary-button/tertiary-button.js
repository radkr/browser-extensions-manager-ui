import styles from "./tertiary-button.module.css";

export default function TertiaryButton({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
