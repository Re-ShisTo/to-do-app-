import { useState } from "react";

export default function Todo({ todo }) {
  const [isEditing, setisEditing] = useState(false);

  const todoContent = isEditing ? (
    <>
      <input type="text" value={todo.title} />
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
      <input type="checkbox" />
      {todoContent}
      <button>Delete</button>
    </>
  );
}
