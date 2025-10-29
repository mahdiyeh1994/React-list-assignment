import React from "react";
import { DeleteModalProps } from "../types/todo";
import Modal from "./Modal";

const DeleteModal: React.FC<DeleteModalProps> = ({
  open,
  onClose,
  onDelete,
}) => {
  const handelClose = () => {
    onDelete();
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} title="Delete Todo">
      <p>Are you sure you want to delete this Todo?</p>
      <div className="mt-6 flex justify-end space-x-2">
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={handelClose}
          type="button"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
