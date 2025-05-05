import styles from "./primary-button.module.css";

export default function PrimaryButton({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
