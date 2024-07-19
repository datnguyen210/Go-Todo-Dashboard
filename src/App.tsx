import React from "react";
import { TodoList } from "./modules/todos/components/todos-list";

const App = () => {
  return (
    <div className="flex h-screen">
      <TodoList />
    </div>
  );
};

export default App;
