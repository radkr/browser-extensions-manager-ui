"use client";

import { use } from "react";

import styles from "./control-bar.module.css";
import { ExtensionsContext } from "@/app/_utils/extensions-provider";

export default function ControlBar() {
  const { filter, setFilter } = use(ExtensionsContext);

  console.log(filter);

  return (
    <div className={styles.controlBar}>
      <h1 className={styles.title}>Extensions List</h1>
      <div className={styles.filter}>
        <button
          className={`${styles.button} ${
            filter == "ALL" ? styles.buttonSelected : ""
          }`}
          onClick={() => {
            setFilter("ALL");
          }}
        >
          All
        </button>
        <button
          className={`${styles.button} ${
            filter == "ACTIVE" ? styles.buttonSelected : ""
          }`}
          onClick={() => {
            setFilter("ACTIVE");
          }}
        >
          Active
        </button>
        <button
          className={`${styles.button} ${
            filter == "INACTIVE" ? styles.buttonSelected : ""
          }`}
          onClick={() => {
            setFilter("INACTIVE");
          }}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
