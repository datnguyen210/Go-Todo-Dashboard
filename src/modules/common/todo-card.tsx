import React from "react";
import CircularCheckbox from "./circular-checkbox";
interface TaskItemProps {
  title: string;
  description?: string;
  priority: number;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  description,
  priority,
}) => (
  <li className="flex items-center mb-2">
    <div className="flex flex-col">
      <div>
        <CircularCheckbox priority={priority} title={title} />
      </div>
      {description && <p className="ml-2 text-base text-gray-600">{description}</p>}
    </div>
  </li>
);

export default TaskItem;
