import { useEffect, useState } from "react";

const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    const getAllTodos = async () => {
      const API = `http://localhost:3000/todo`;
      const url = API;
      if (currentFilter === "active") {
        url;
      }
      const res = await fetch(`http://localhost:3000/todo`);
      const data = await res.json();
      setTodoList(data);
    };

    getAllTodos();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Connecting APIs with our components
      </h2>
      <form className="flex gap-2 mb-4">
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Enter Your Todo"
          className="flex-1 px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add Todo
        </button>
      </form>

      <select
        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={currentFilter}
        onChange={(e) => setCurrentFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>

      <ul className="space-y-2 ">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3
           border rounded-md"
          >
            <div>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                className="h-4 w-4"
              />
              <span
                className={`${todo.isCompleted ? "line-through text-gray-400" : " text-gray-800"}`}
              >
                {todo.title}
              </span>
              <button className="text-sm text-red-400 hover:text-red-800">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
