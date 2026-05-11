import { useSidebar } from "../context/sidebar.provider";
import { Menu } from "lucide-react";
import UserButton from "./user.dropdown";

export default function AppNavbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="border-b border-b-gray-400/30 w-full p-3">
      <div className="flex justify-between">
        <button className="cursor-pointer" onClick={toggleSidebar}>
          <Menu />
        </button>
        <UserButton />
      </div>
    </div>
  );
}
