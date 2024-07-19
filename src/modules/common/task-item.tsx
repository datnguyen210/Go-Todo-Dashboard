import React from "react";
interface TaskItemProps {
  taskName: string;
  dueDate?: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ taskName, dueDate }) => (
  <li className="flex items-center mb-2">
    <input type="checkbox" className="mr-2" />
    <span>{taskName}</span>
    {dueDate && <span className="ml-2 text-sm text-red-500">{dueDate}</span>}
  </li>
);

export default TaskItem;
