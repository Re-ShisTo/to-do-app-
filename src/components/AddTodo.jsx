import { useState } from "react";
import { useTodoContext } from "../contexts/useTodoContext";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const { onAddTodo } = useTodoContext();

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
