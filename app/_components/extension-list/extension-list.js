"use client";

import { use } from "react";

import styles from "./extension-list.module.css";
import { ExtensionsContext } from "@/app/_utils/extensions-provider";

import ExtensionItem from "../extension-item/extension-item";

export default function ExtensionList() {
  const { extensions } = use(ExtensionsContext);

  return (
    <ul className={styles.extensionList}>
      {extensions.map((extension) => (
        <ExtensionItem key={extension.name} extension={extension} />
      ))}
    </ul>
  );
}
