import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Todo, TodoFormData, TodoFormModalProps } from "../types/todo";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  subtitle: yup.string().required("Subtitle is required"),
});

const TodoFormModal: React.FC<TodoFormModalProps> = ({
  open,
  onClose,
  onSave,
  todos,
  initialItem,
  editingIndex,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoFormData>({
    resolver: yupResolver(schema),
    defaultValues: initialItem ?? {
      title: "",
      subtitle: "",
    },
  });

  // When modal opens or initialItem changes, reset form values
  useEffect(() => {
    if (open) {
      reset(
        initialItem ?? {
          title: "",
          subtitle: "",
        }
      );
    }
  }, [open, initialItem, reset]);

  if (!open) return null;

  const onSubmit = (data:TodoFormData ) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US') + ' ' + 
      now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    const trimmed: Todo = {
      title: data.title.trim(),
      subtitle: data.subtitle.trim(),
      createdDate: formattedDate
    };
    onSave(trimmed, editingIndex);
    reset();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {initialItem ? "Edit Todo" : "Create New Todo"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                {...register("title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Subtitle */}
            <div>
              <label
                htmlFor="subtitle"
                className="block text-sm font-medium text-gray-700"
              >
               Subtitle
              </label>
              <input
                id="subtitle"
                {...register("subtitle")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
              {errors.subtitle && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.subtitle.message}
                </p>
              )}
            </div>
            </div>
          <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {initialItem ? "Save Changes" : "Create Todo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoFormModal;
