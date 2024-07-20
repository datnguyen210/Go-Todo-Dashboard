import React from "react";
import { LucideIcon } from "lucide-react";
import {
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoChevronDown,
} from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { GoTag } from "react-icons/go";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import InboxIcon from "@mui/icons-material/Inbox";

const Sidebar = () => (
  <div className="w-96 bg-gray-100 h-screen p-4">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
      <span className="font-semibold">chris</span>
      <IoChevronDown className="ml-1" size={16} />
    </div>
    <button className="flex items-center space-x-2 text-red-600 mb-4 text-xl">
      <AddCircleIcon fontSize="large" />
      <p>Add task</p>
    </button>

    <nav>
      <NavItem
        icon={<IoMdSearch size={26} fontSize="medium" />}
        label="Search"
      />
      <NavItem
        icon={<InboxIcon fontSize="medium" />}
        label="Inbox"
        count={4}
        active
      />
      <NavItem
        icon={<IoCalendarNumberOutline size={24} />}
        label="Today"
        count={1}
      />
      <NavItem icon={<IoCalendarOutline size={24} />} label="Upcoming" />
      <NavItem icon={<GoTag size={24} />} label="Filters & Labels" />
    </nav>
    <div className="mt-4">
      <h3 className="font-semibold mb-2">My Projects</h3>
    </div>
  </div>
);

interface NavItemProps {
  icon: React.ReactElement<LucideIcon>;
  label: string;
  count?: number;
  active?: boolean;
  emoji?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  count,
  active,
  emoji,
}) => (
  <div
    className={`flex items-center p-2 rounded ${
      active ? "bg-red-100 text-red-500" : "hover:bg-gray-200"
    }`}
  >
    {icon}
    <span className="ml-2 flex-grow">{label}</span>
    {emoji && <span className="mr-2">{emoji}</span>}
    {count && <span className="text-sm text-gray-500">{count}</span>}
  </div>
);

export default Sidebar;
