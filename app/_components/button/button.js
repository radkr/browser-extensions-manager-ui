import styles from "./button.module.css";

export default function Button({ styleId = "primary", children, ...props }) {
  let className = styles.button;

  switch (styleId) {
    case "primary":
      className += ` ${styles.primary}`;
      break;
    case "secondary":
      className += ` ${styles.secondary}`;
      break;
    case "tertiary":
      className += ` ${styles.tertiary}`;
      break;
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
