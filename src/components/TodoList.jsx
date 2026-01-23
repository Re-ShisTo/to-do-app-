import Todo from "./Todo";
import { useState } from "react";
import intialTodos from "../data/data";
import nextIdGenerate from "../utils/nextIdGenerator";

export default function TodoList() {
  const [todos, setTodos] = useState(intialTodos);

  const handleChangeTodo = (changedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === changedTodo.id) {
        return {
          ...todo,
          title: changedTodo.title,
          done: changedTodo.done,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const handleDeleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  const handleAddTodo = (title) => {
    const newTodos = [
      ...todos,
      {
        id: nextIdGenerate(todos),
        title,
        done: false,
      },
    ];
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {
            <Todo
              todo={todo}
              onChangeTodo={handleChangeTodo}
              onDeleteTodo={handleDeleteTodo}
              onAddTodo={handleAddTodo}
            />
          }
        </li>
      ))}
    </ul>
  );
}
