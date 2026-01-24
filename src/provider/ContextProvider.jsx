import { useImmerReducer } from "use-immer";
import intialTodos from "../data/data";
import todosReducer from "../reducer/todosReducer";
import TodoContext from "../contexts/todoContext";

export default function ContextProvider({ children }) {
  const [todos, dispatch] = useImmerReducer(todosReducer, intialTodos);

  const handleChangeTodo = (changedTodo) => {
    dispatch({
      type: "change",
      changedTodo,
    });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "delete",
      todoId,
    });
  };

  const handleAddTodo = (title) => {
    dispatch({
      type: "add",
      title,
    });
  };

  return (
    <TodoContext
      value={{
        todos: todos,
        onAddTodo: handleAddTodo,
        onChangeTodo: handleChangeTodo,
        onDeleteTodo: handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
