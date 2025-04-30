"use client";

import { useState } from "react";

import styles from "./toggle-switch.module.css";

export default function ToggleSwitch({ on }) {
  const [isOn, setIsOn] = useState(on);

  return (
    <button
      className={`${styles.button} ${isOn && styles.buttonOn}`}
      onClick={() => {
        setIsOn((prev) => !prev);
      }}
    >
      <div className={styles.thumb} />
    </button>
  );
}
