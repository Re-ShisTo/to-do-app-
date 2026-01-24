import { useContext } from "react";
import TodoContext from "./todoContext";

export function useTodoContext() {
  return useContext(TodoContext);
}
