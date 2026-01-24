import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ContextProvider from "./provider/ContextProvider";

const App = () => {
  return (
    <main>
      <h1>Simple To Do App</h1>
      <ContextProvider>
        <AddTodo />
        <TodoList />
      </ContextProvider>
    </main>
  );
};

export default App;
