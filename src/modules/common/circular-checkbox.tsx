import React, { useState } from "react";

interface CircularCheckboxProps {
  priority: number;
  title: string;
}

const CircularCheckbox: React.FC<CircularCheckboxProps> = ({
  priority,
  title,
}) => {
  const [checked, setChecked] = useState(false);
  // Determine border color based on priority
  const borderColor = (() => {
    switch (priority) {
      case 1:
        return "border-red-500";
      case 2:
        return "border-blue-500";
      default:
        return "";
    }
  })();

  const checkedBoxBg = (() => {
    switch (priority) {
      case 1:
        return "checked:bg-red-500 ";
      case 2:
        return "checked:bg-blue-500 ";
      default:
        return "";
    }
  })();

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="tailwind-checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={`appearance-none w-6 h-6 rounded-full border-2 ${borderColor} 
          bg-white ${checkedBoxBg} checked:border-transparent 
          transition duration-200 cursor-pointer`}
      />
      <label htmlFor="tailwind-checkbox" className="ml-2">
        {title}
      </label>
    </div>
  );
};

export default CircularCheckbox;
