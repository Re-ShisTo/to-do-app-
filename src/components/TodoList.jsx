import Todo from "./Todo";
import TodoContext from "../contexts/todoContext";
import { useTodoContext } from "../contexts/useTodoContext";

export default function TodoList() {
  const { todos } = useTodoContext();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{<Todo todo={todo} />}</li>
      ))}
    </ul>
  );
}
