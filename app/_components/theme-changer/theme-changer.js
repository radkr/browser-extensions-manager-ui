"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import styles from "./theme-changer.module.css";
import moonIcon from "@/public/images/icon-moon.svg";
import sunIcon from "@/public/images/icon-sun.svg";

export default function ThemeChanger() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  let label, src, alt, handler;

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  switch (resolvedTheme) {
    case "light":
      label = "Switch to dark mode";
      src = moonIcon;
      alt = "Moon Icon";
      handler = () => setTheme("dark");
      break;
    case "dark":
      label = "Switch to light mode";
      src = sunIcon;
      alt = "Sun Icon";
      handler = () => setTheme("light");
  }

  return (
    <button className={styles.themeButton} aria-label={label} onClick={handler}>
      <Image src={src} alt={alt} className={styles.themeIcon} />
    </button>
  );
}
