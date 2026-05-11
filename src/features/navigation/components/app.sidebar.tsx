import { navGroups } from "..";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/sidebar.provider";

export default function AppSidebar() {
  const { isOpen } = useSidebar();
  return (
    <div
      className={`border-r border-r-gray-400/30 h-screen p-3 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "w-72" : "w-20"}`}
    >
      <div className="flex items-center gap-1 mb-10">
        <div className="bg-white p-1 rounded-full">
          <img src="/images/logo.png" className="size-9" alt="" />
        </div>
        <span className="font-bold text-3xl text-blue-950">
          {isOpen && "Wasil"}
        </span>
      </div>
      {navGroups.map((group, index) => (
        <div className={`mb-5 w-full`} key={index}>
          <div className="font-bold text-gray-500 text-md capitalize mb-3">
            {isOpen ? group.label : "..."}
          </div>
          {group.items.map((item, index) => (
            <div key={index} className="mb-3">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 bg-gray-50/10 p-2 rounded-md mx-3 h-8 hover:transition-colors duration-500 ${isActive ? "bg-gray-300" : "hover:bg-gray-300/30"}`
                }
              >
                <item.icon className="size-4" />
                {isOpen && <span className="text-xs">{item.title}</span>}
              </NavLink>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
