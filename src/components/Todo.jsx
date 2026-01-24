import { useState } from "react";
import { useTodoContext } from "../contexts/useTodoContext";

export default function Todo({ todo }) {
  const [isEditing, setisEditing] = useState(false);
  const { onChangeTodo, onDeleteTodo } = useTodoContext();

  const todoContent = isEditing ? (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => onChangeTodo({ ...todo, title: e.target.value })}
      />
      <button onClick={() => setisEditing(false)}>save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={() => setisEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => onChangeTodo({ ...todo, done: e.target.checked })}
      />
      {todoContent}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </>
  );
}
