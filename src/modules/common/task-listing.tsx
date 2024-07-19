import React from "react";
import Task from "./task-item";

const TaskListing = () => {
  return (
    <div>
      <h2 className="mt-4 mb-2 text-lg">Overdue</h2>
      <Task taskName="Re-budget" dueDate="10 Jul" />
      <h2 className="mt-4 mb-2 text-lg">15 Jul · Today · Monday</h2>
      <button className="text-red-500">+ Add task</button>
    </div>
  );
};

export default TaskListing;
