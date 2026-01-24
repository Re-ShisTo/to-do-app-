import { useState } from "react";

export default function AddTodo({ onAddTodo, onChangeTodo, onDeleteTodo }) {
  const [title, setTitle] = useState("");

  return (
    <section>
      <input
        type="text"
        placeholder="Add task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => onAddTodo(title)}>Add</button>
    </section>
  );
}
