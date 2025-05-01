import Image from "next/image";

import Logo from "@/app/_components/logo/logo";
import ThemeChanger from "@/app/_components/theme-changer/theme-changer";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <ThemeChanger />
    </div>
  );
}
