import React, { useState, useEffect } from "react";
import { Todo } from "./types/todo";
import TodoList from "./components/todoList";
import TodoFormModal from "./components/TodoFormModal";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | undefined>(
    undefined
  );
  
  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  // Called when the “Add New” button is clicked
  const startCreate = () => {
    setEditingIndex(undefined);
    setIsModalOpen(true);
  };
  // Saves updated list to state + localStorage
  const saveList = (newList: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(newList));
    setTodos(newList);
  };

  // Called when TodoFormModal submits a new or edited Todo
  const handleSave = (data: Todo, idx?: number) => {
    if (typeof idx === "number") {
      // Edit mode: replace at index
      const updated = [...todos];
      updated[idx] = { ...data };
      saveList(updated);
    } else {
      // Create mode
      saveList([...todos, { ...data }]);
    }
  };
    // Called when the “Edit” button is clicked in the list
  const startEdit = (idx: number) => {
    setEditingIndex(idx);
    setIsModalOpen(true);
  };
  return (
    <div>
      <header className="p-4 flex justify-between items-center bg-gray-100">
        <h1 className="text-xl font-bold">Todo List</h1>
        <button
          onClick={startCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New
        </button>
      </header>

      <main className="p-4">
        <TodoList todos={todos} onDelete={() => {}} onEdit={startEdit} />
      </main>
      <TodoFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        todos={todos}
        initialItem={
          editingIndex === undefined ? undefined : todos[editingIndex]
        }
        editingIndex={editingIndex}
      />
    </div>
  );
}
