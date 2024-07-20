import Navbar from "../../common/navbar";
import TaskItem from "../../common/todo-card";
import { useIndexTodos } from "../todo.queries";

export const TodoList = () => {
  const { data: todos, isLoading } = useIndexTodos();
  return (
    <div className="flex flex-col space-y-10 w-screen pl-20">
      <Navbar />
      <div className="flex flex-col space-y-3">
        {!isLoading &&
          todos?.map((todo) => (
            <>
              <TaskItem
                key={todo.ID}
                title={todo.Title}
                description={todo.Description}
                priority={todo.Priority}
              />
              <hr className="text-gray-500 h-2 mr-40" />
            </>
          ))}
      </div>
    </div>
  );
};
