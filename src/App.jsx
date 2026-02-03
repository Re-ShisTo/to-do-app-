import { useEffect, useState } from "react";

const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const getAllTodos = async () => {
    const API = `http://localhost:3000/todo`;
    let url = API;

    if (currentFilter === "active") {
      url += `?isComplete=false`;
    } else if (currentFilter === "completed") {
      url += "?isComplete=true";
    }

    const res = await fetch(url);
    const data = await res.json();
    setTodoList(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllTodos();
  }, [currentFilter]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!todoTitle.trim()) {
      return alert("Please provide a valid todo title");
    }

    const newTodo = {
      title: todoTitle,
      isComplete: false,
    };

    await fetch(`http://localhost:3000/todo`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json",
      },
    });

    getAllTodos();
    setTodoTitle("");
  };

  const toggleIsComplete = async (todo) => {
    await fetch(`http://localhost:3000/todo/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({ isComplete: !todo.isComplete }),
      headers: {
        "Content-type": "application/json",
      },
    });

    getAllTodos();
  };

  const deleteHandler = async (todoId) => {
    await fetch(`http://localhost:3000/todo/${todoId}`, {
      method: "DELETE",
    });

    getAllTodos();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Connecting APIs with our components
      </h2>
      <form className="flex gap-2 mb-4" onSubmit={submitHandler}>
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
            <div className="w-full flex items-center justify-between">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => toggleIsComplete(todo)}
                className="h-4 w-4"
              />
              <span
                className={`${todo.isComplete ? "line-through text-gray-400" : " text-gray-800"}`}
              >
                {todo.title}
              </span>
              <button
                className="text-sm text-red-400 hover:text-red-800"
                onClick={() => deleteHandler(todo.id)}
              >
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
