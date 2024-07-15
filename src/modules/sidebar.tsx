import React from "react";
import {
  Search,
  ChevronDown,
  Plus,
  List,
  Calendar,
  Tag,
  LucideIcon,
} from "lucide-react";

const Sidebar = () => (
  <div className="w-64 bg-gray-100 h-screen p-4">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
      <span className="font-semibold">chris</span>
      <ChevronDown className="ml-auto" size={16} />
    </div>
    <button className="flex items-center text-red-500 mb-4">
      <Plus size={16} className="mr-2" />
      Add task
    </button>
    <div className="flex items-center bg-white rounded p-2 mb-4">
      <Search size={16} className="text-gray-400 mr-2" />
      <input className="bg-transparent outline-none" placeholder="Search" />
    </div>
    <nav>
      <NavItem icon={<List size={16} />} label="Inbox" count={4} active />
      <NavItem icon={<Calendar size={16} />} label="Today" count={1} />
      <NavItem icon={<Calendar size={16} />} label="Upcoming" />
      <NavItem icon={<Tag size={16} />} label="Filters & Labels" />
    </nav>
    <div className="mt-4">
      <h3 className="text-sm font-semibold mb-2">My Projects</h3>
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
