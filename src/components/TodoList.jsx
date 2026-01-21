import Todo from "./Todo";
import { useState } from "react";
import intialTodos from "../data/data";

export default function TodoList() {
  const [todos, setTodos] = useState(intialTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{<Todo todo={todo} />}</li>
      ))}
    </ul>
  );
}
