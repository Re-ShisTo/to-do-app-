import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import nextIdGenerate from "./utils/nextIdGenerator";
import intialTodos from "./data/data";

const App = () => {
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
    console.log(nextIdGenerate(todos));
  };

  return (
    <main>
      <h1>Simple To Do App</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </main>
  );
};

export default App;
