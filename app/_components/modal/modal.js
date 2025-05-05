"use client";

import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";

import styles from "./modal.module.css";

export default function Modal({ open, onClose, children }) {
  const [isMounted, setIsMounted] = useState();
  const modalRef = useRef();

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const modal = modalRef.current;

    if (isMounted) {
      if (open) {
        modal.showModal();
      }
      return () => {
        modal.close();
      };
    }
  }, [isMounted, open]);

  if (!isMounted) return null;

  return createPortal(
    <dialog
      className={styles.modal}
      ref={modalRef}
      onClose={onClose}
      onClick={(event) => {
        event.stopPropagation();
        if (event.target == modalRef.current) {
          onClose();
        }
      }}
    >
      {open && children}
    </dialog>,
    document.getElementById("modal-root")
  );
}
