import React from "react";
import { TodoListProps } from "../types/todo";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEdit,
  onDelete,
}) => {
  if (todos.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-8 p-4 bg-white rounded shadow">
        <p className="text-gray-700 text-center">No Item found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Subtitle</th>
              <th className="px-4 py-2 border">Created Date</th>
               <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => (
              <tr key={item.createdDate} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.title}</td>
                <td className="px-4 py-2 border">{item.subtitle}</td>
                <td className="px-4 py-2 border">{item.createdDate}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button
                    onClick={() => onEdit(index)}
                    className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
