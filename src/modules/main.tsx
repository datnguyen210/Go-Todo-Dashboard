import React from "react";
import TaskItem from "./common/task-item";
import { Plus } from "lucide-react";
const MainContent = () => (
  <div className="flex-grow p-8">
    <h1 className="text-3xl font-bold mb-4">Inbox</h1>
    <ul>
      <TaskItem taskName="Meal prep" />
      <TaskItem taskName="Read book 'Four thousand weeks'" />
    </ul>
    <button className="flex items-center text-gray-500 mt-4">
      <Plus size={16} className="mr-2" />
      Add task
    </button>
  </div>
);

export default MainContent;
