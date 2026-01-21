import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <main>
      <h1>Simple To Do App</h1>
      <AddTodo />
      <TodoList />
    </main>
  );
};

export default App;
