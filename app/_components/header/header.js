import Image from "next/image";
import logoImage from "@/public/images/logo.svg";
import moonIcon from "@/public/images/icon-moon.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image src={logoImage} alt="Extensions logo" />
      <button className={styles.themeButton} aria-label="Switch to dark mode">
        <Image src={moonIcon} alt="Moon Icon" />
      </button>
    </div>
  );
}
