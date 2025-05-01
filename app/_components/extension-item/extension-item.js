import Image from "next/image";

import styles from "./extension-item.module.css";
import ToggleSwitch from "../toggle-switch/toggle-switch";

export default function ExtensionItem({ extension }) {
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
        />
        <div>
          <h2 className={styles.name}> {extension.name}</h2>
          <p className={styles.description}>{extension.description}</p>
        </div>
      </div>
      <div className={styles.controlBox}>
        <button className={styles.remove}>Remove</button>
        <ToggleSwitch on />
      </div>
    </li>
  );
}
