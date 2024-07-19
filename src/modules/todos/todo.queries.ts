import { useQuery } from "@tanstack/react-query";
import { indexTodos } from "../../services/api-todo.services";

export const useIndexTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: indexTodos,
  });
};
