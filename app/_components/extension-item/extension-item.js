"use client";

import Image from "next/image";
import { use } from "react";
import { ExtensionsContext } from "@/app/_utils/extensions-provider";

import styles from "./extension-item.module.css";
import ToggleSwitch from "@/app/_components/toggle-switch/toggle-switch";
import Button from "@/app/_components/button/button";

export default function ExtensionItem({ extension }) {
  const { toggleActive, toRemove } = use(ExtensionsContext);

  console.log("From item:", extension);

  return (
    <li className={styles.itemCard}>
      <div className={styles.infoBox}>
        <Image
          src={`${
            process.env.NODE_ENV === "production"
              ? "/browser-extensions-manager-ui"
              : ""
          }/images/${extension.logo}`}
          alt={`${extension.name} logo`}
          width={60}
          height={60}
          className={styles.icon}
        />
        <div>
          <h2 className={styles.name}> {extension.name}</h2>
          <p className={styles.description}>{extension.description}</p>
        </div>
      </div>
      <div className={styles.controlBox}>
        <Button
          styleId="secondary"
          onClick={() => {
            toRemove(extension.name);
          }}
        >
          Remove
        </Button>
        <ToggleSwitch
          on={extension.isActive}
          onToggle={() => {
            toggleActive(extension.name);
          }}
        />
      </div>
    </li>
  );
}
