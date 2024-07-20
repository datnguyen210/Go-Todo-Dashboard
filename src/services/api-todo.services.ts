import axios from "axios";
import { Todo } from "../modules/todos/todo.type";

export const indexTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get("http://localhost:8080/todos");
  return data;
};
