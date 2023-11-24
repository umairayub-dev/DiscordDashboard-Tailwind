import React from "react";
import {
  BsPlus,
  BsFillLightningFill,
  BsGear,
  BsGearFill,
} from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg"
    >
      <SidebarIcon icon={<FaFire size="28" />} />
      <Divider />
      <SidebarIcon icon={<BsPlus size="32" />} />
      <SidebarIcon icon={<BsFillLightningFill size="20" />} />
      <SidebarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SidebarIcon icon={<BsGearFill size="20" />} />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "Tooltip !" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;
export default Sidebar;
