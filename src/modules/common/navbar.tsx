import React from "react";
import { MdOutlineTune } from "react-icons/md";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 pr-8">
      <h1 className="text-3xl font-bold">Inbox</h1>
      <div className="flex items-center space-x-4">
        <button className="flex align-middle items-center text-lg font-semibold space-x-1 text-gray-600 hover:text-gray-800">
          <MdOutlineTune size={25} />
          <span className="hidden md:inline">View</span>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <MoreHorizIcon fontSize="medium"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
