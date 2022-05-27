import { useEffect, useRef } from "react";

// Style
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  // TODO: supprimer cette ref
  // const containerRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return !isOpen ? null : (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        // ref={containerRef}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
