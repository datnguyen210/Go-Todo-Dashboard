import React from "react";
import { TodoList } from "./modules/todos/components/todos-list";
import Sidebar from "./modules/common/sidebar";

const App = () => {
  return (
    <div className="flex h-screen space-x-10">
      <Sidebar />
      <TodoList />
    </div>
  );
};

export default App;
