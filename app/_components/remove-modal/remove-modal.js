"use client";

import { use } from "react";

import styles from "./remove-modal.module.css";
import { ExtensionsContext } from "@/app/_utils/extensions-provider";
import Modal from "@/app/_components/modal/modal";
import PrimaryButton from "@/app/_components/primary-button/primary-button";
import TertiaryButton from "@/app/_components/tertiary-button/tertiary-button";

export default function RemoveModal() {
  const { remove, cancelRemove, aboutToRemove } = use(ExtensionsContext);

  return (
    <Modal open={aboutToRemove} onClose={cancelRemove}>
      <div className={styles.removeModal}>
        <div>
          <h2 className={styles.title}>Removal</h2>
          <p
            className={styles.description}
          >{`Are you sure that you want to remove the ${aboutToRemove} extension?`}</p>
        </div>
        <div className={styles.actions}>
          <TertiaryButton onClick={cancelRemove}>Cancel</TertiaryButton>
          <PrimaryButton
            onClick={() => {
              remove(aboutToRemove);
            }}
          >
            Remove
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}
