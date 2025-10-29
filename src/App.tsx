import React, { useState, useEffect } from "react";
import { Todo } from "./types/todo";
import TodoList from "./components/todoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const startCreate = () => {};
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
        <TodoList todos={todos} onDelete={()=>{}} onEdit={()=>{}} />
      </main>
    </div>
  );
}
