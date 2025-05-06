import styles from "./toggle-button.module.css";

export default function ToggleButton({ on, onToggle, children, ...props }) {
  return (
    <button
      className={`${styles.button} ${on ? styles.buttonSelected : ""}`}
      onClick={() => {
        onToggle();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
