import styles from "./extension-list.module.css";

import ExtensionItem from "../extension-item/extension-item";
import extensions from "./data.json";

export default function ExtensionList() {
  console.log("extension list: ", extensions);
  return (
    <ul className={styles.extensionList}>
      {extensions.map((extension) => (
        <ExtensionItem key={extension.name} extension={extension} />
      ))}
    </ul>
  );
}
