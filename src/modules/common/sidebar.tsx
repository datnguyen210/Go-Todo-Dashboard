import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoChevronDown,
} from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { GoTag } from "react-icons/go";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InboxIcon from "@mui/icons-material/Inbox";

const Sidebar = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Get the navigate function

  const pathname = location.pathname; // Get the pathname from the location

  return (
    <div className="w-96 bg-gray-100 h-screen p-4">
      <div className="flex items-center mt-2 mb-4">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <span className="font-semibold">chris</span>
        <IoChevronDown className="ml-1" size={16} />
      </div>
      <button className="flex items-center space-x-2 text-red-600 my-4 text-xl">
        <AddCircleIcon fontSize="large" />
        <p>Add task</p>
      </button>

      <nav className="flex flex-col">
        <SideBarItem
          icon={<IoMdSearch size={26} fontSize="medium" />}
          label="Search"
        />
        <SideBarItem
          icon={<InboxIcon fontSize="medium" />}
          label="Inbox"
          count={4}
          active={pathname === "/app/inbox"}
          onClick={() => navigate("/app/inbox")} // Navigate to Inbox
        />
        <SideBarItem
          icon={<IoCalendarNumberOutline size={24} />}
          label="Today"
          count={1}
          active={pathname === "/app/today"}
          onClick={() => navigate("/app/today")} // Navigate to Today
        />
        <SideBarItem
          icon={<IoCalendarOutline size={24} />}
          label="Upcoming"
          active={pathname === "/app/upcoming"}
          onClick={() => navigate("/app/upcoming")} // Navigate to Upcoming
        />
        <SideBarItem
          icon={<GoTag size={24} />}
          label="Filters & Labels"
          active={pathname === "/app/filters-labels"}
          onClick={() => navigate("/app/filters-labels")} // Navigate to Filters & Labels
        />
      </nav>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">My Projects</h3>
      </div>
    </div>
  );
};

interface SideBarItemProps {
  icon: React.ReactElement;
  label: string;
  count?: number;
  active?: boolean;
  onClick?: () => void;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  icon,
  label,
  count,
  active,
  onClick,
}) => (
  <button
    className={`text-[20px] w-full flex items-center justify-between p-2 rounded-lg focus:outline-none focus:ring-none ${
      active ? "bg-[#ffefe5] text-red-500" : "hover:bg-gray-200"
    }`}
    onClick={onClick}
    aria-pressed={active}
  >
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{label}</span>
    </div>
    {count && <span className="text-sm text-gray-500">{count}</span>}
  </button>
);

export default Sidebar;
