import { navGroups } from "..";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/sidebar.provider";
import { useMediaQuery } from "../../../shared/hooks/use.mediaquery";
import { X } from "lucide-react";

export default function AppSidebar() {
  const isSmallDevice = useMediaQuery("(max-width: 767px)");
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-30 md:relative md:translate-x-0 bg-gray-50
          border-r border-r-gray-400/30 h-full p-3 transition-all duration-300 ease-in-out overflow-y-auto flex-none
         ${isOpen ? "w-64 md:w-72 translate-x-0" : "w-20 -translate-x-full"}`}
      >
        <div className="flex items-center gap-1 mb-10">
          <div className="flex-1 flex items-center-safe gap-1">
            <div className="bg-white p-1 rounded-full">
              <img src="/images/logo.png" className="size-9" alt="" />
            </div>
            <span className="font-bold text-3xl text-blue-950">
              {isOpen && "Wasil"}
            </span>
          </div>
          {isSmallDevice && <X onClick={toggleSidebar} />}
        </div>
        {navGroups.map((group, index) => (
          <div className={`mb-3 w-full`} key={index}>
            <div className="font-bold text-gray-500 text-md capitalize mb-3">
              {isOpen ? group.label : "..."}
            </div>
            {group.items.map((item, index) => (
              <div key={index} className="mb-3">
                <NavLink
                  to={item.path}
                  onClick={isSmallDevice ? toggleSidebar : () => {}}
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
      </aside>
    </>
  );
}
