import nextIdGenerate from "../utils/nextIdGenerator";

const todosReducer = (draftTodos, action) => {
  switch (action.type) {
    case "change":
      {
        const index = draftTodos.findIndex(
          (t) => t.id === action.changedTodo.id,
        );
        draftTodos[index] = action.changedTodo;
      }
      break;

    case "add":
      {
        draftTodos.push({
          id: nextIdGenerate(draftTodos),
          title: action.title,
          done: false,
        });
      }
      break;

    case "delete":
      return draftTodos.filter((todo) => todo.id !== action.todoId);

    default:
      throw new Error("No Matching Actions");
  }
};

export default todosReducer;
