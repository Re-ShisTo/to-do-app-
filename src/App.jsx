import { useState } from "react";

const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <form action="">
      <input type="text" />
      <button>Create Todo</button>
    </form>
  );
};

export default App;
