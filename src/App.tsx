import React, { useState, useEffect } from "react";
import { Todo } from "./types/todo";
import TodoFormModal from "./components/TodoFormModal";
import TodoList from "./components/TodoList";
import DeleteModal from "./components/DeleteModal";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
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
    setSelectedIndex(undefined);
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
    setSelectedIndex(idx);
    setIsModalOpen(true);
  };
   // Called when the “Delete” button is clicked in the list
  const startDelete = (idx: number) => {
    setSelectedIndex(idx);
   setIsDeleteModalOpen(true)
  };
  // Called when DeleteModal confirm delete
  const handleDelete = () => {
    const updated = todos.filter((_, i) => i !== selectedIndex);
    saveList(updated);
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
        <TodoList
          todos={todos}
          onDelete={startDelete}
          onEdit={startEdit}
        />
      </main>
      <TodoFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialItem={
          selectedIndex === undefined ? undefined : todos[selectedIndex]
        }
        editingIndex={selectedIndex}
      />
      <DeleteModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
