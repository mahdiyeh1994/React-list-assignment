import React, { useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (open && !dialog.open) {
        dialog.showModal();
      } else if (!open && dialog.open) {
        dialog.close();
      }
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      const handleClose = () => {
        onClose();
      };
      dialog.addEventListener("close", handleClose);
      return () => dialog.removeEventListener("close", handleClose);
    }
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 m-auto backdrop:bg-black/50"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold"
        aria-label="Close modal"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>

      {children}
    </dialog>
  );
};

export default Modal;
