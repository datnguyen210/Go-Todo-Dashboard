import Navbar from "../../common/navbar";
import TaskItem from "../../common/todo-card";
import { useIndexTodos } from "../todo.queries";

export const Inbox = () => {
  const { data: todos, isLoading } = useIndexTodos();
  return (
    <div className="flex flex-col space-y-10 pl-20">
      <Navbar />
      <h1 className="text-3xl font-bold">Inbox</h1>
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
