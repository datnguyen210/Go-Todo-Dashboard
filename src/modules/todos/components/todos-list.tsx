import { useIndexTodos } from "../todo.queries";

export const TodoList = () => {
  const { data: todos, isLoading } = useIndexTodos();
  return (
    <div>
      {!isLoading &&
        todos?.map((todo: any) => (
          <div>
            <h2 className="mt-4 mb-2 text-lg">{todo.Title}</h2>
            <h2 className="mt-4 mb-2 text-lg">{todo.Description}</h2>
            <button className="text-red-500">{todo.Priority}</button>
          </div>
        ))}
    </div>
  );
};
