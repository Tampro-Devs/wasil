import { Cog, LogOut, User, UserCog } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropDownItemContent {
  title: string;
  link: string;
  ItemIcon: React.ElementType;
}
export default function UserButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group cursor-pointer rounded-full p-1 bg-slate-300 hover:bg-slate-500 transition-colors duration-300"
      >
        <User className="text-gray-500 group-hover:text-white" />
      </button>
      <UserDropDown isOpen={isOpen} />
    </div>
  );
}

function UserDropDown({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`absolute right-0 w-48 rounded-sm bg-slate-200 shadow shadow-slate-400/30 transition-all duration-200 ease-in-out origin-top-right p-1
          ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
    >
      <div className="flex border-b items-center border-b-gray-400/30 p-3 gap-1 mb-1">
        <img src="/images/user.png" className="size-10" />
        <div className="flex flex-col  text-gray-700">
          <span className="text-xs font-bold">Jafar Salum Ali</span>
          <span className="text-xs">Member</span>
        </div>
      </div>
      <DropDownItem title="Profile" link="" ItemIcon={UserCog} />
      <DropDownItem title="Settings" link="" ItemIcon={Cog} />
      <DropDownItem title="Log Out" link="" ItemIcon={LogOut} />
    </div>
  );
}

function DropDownItem({ title, ItemIcon }: DropDownItemContent) {
  return (
    <button className="cursor-pointer rounded-sm w-full my-1 py-2 px-1 border-b border-b-gray-400/30 transition-colors hover:bg-slate-300 hover:border-b-gray-400/10">
      <div className="flex items-center gap-1 text-gray-700">
        <ItemIcon className="size-4" />
        <span className="text-xs">{title}</span>
      </div>
    </button>
  );
}
