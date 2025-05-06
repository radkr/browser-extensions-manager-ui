"use client";

import { use } from "react";

import styles from "./control-bar.module.css";
import { ExtensionsContext } from "@/app/_utils/extensions-provider";
import ToggleButton from "@/app/_components/toggle-button/toggle-button";

export default function ControlBar() {
  const { filter, setFilter } = use(ExtensionsContext);

  console.log(filter);

  return (
    <div className={styles.controlBar}>
      <h1 className={styles.title}>Extensions List</h1>
      <div className={styles.filter}>
        <ToggleButton
          on={filter == "ALL"}
          onToggle={() => {
            setFilter("ALL");
          }}
        >
          All
        </ToggleButton>
        <ToggleButton
          on={filter == "ACTIVE"}
          onToggle={() => {
            setFilter("ACTIVE");
          }}
        >
          Active
        </ToggleButton>
        <ToggleButton
          on={filter == "INACTIVE"}
          onToggle={() => {
            setFilter("INACTIVE");
          }}
        >
          Inactive
        </ToggleButton>
      </div>
    </div>
  );
}
