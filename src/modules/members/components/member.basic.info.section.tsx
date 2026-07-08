import type { IconType } from "react-icons/lib";
import { LuBriefcaseBusiness, LuBuilding2 } from "react-icons/lu";
import { PiToolbox } from "react-icons/pi";
import type { MemberInfo } from "../types/member.type";

export default function MemberBasicInfoSection({
  member,
}: {
  member: MemberInfo | null;
}) {
  return (
    <div className="mt-1 pt-1 border-t border-t-slate-300">
      <div className="flex flex-col">
        <InfoContainer
          title="Proffession"
          content={member?.proffession}
          Icon={LuBriefcaseBusiness}
        />
        <InfoContainer
          title="Work Title"
          content={member?.work_title}
          Icon={PiToolbox}
        />
        <InfoContainer
          title="Institution"
          content={member?.institution}
          Icon={LuBuilding2}
        />
        {/* <div className="flex flex-col py-1 border-t border-t-slate-300">
          <span className="mb-1 font-bold">Member's Opinion</span>
          <span className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            repellendus tempore neque necessitatibus quasi magni, in hic placeat
            ipsa dignissimos rerum excepturi quidem eaque nulla? Aut ad
            obcaecati, unde eum eius sit perferendis nisi amet? Vitae nam
            doloremque itaque ducimus quam praesentium, vel commodi aut dolorum
            incidunt, ipsa fugit necessitatibus esse optio neque eligendi
            quibusdam dolores. Optio eum est eveniet.
          </span>
        </div> */}
      </div>
    </div>
  );
}

function InfoContainer({
  title,
  content,
  Icon,
}: {
  title: string;
  content?: string;
  Icon: IconType;
}) {
  return (
    <div className="flex items-center gap-1">
      <div className="text-slate-500">
        <Icon size={18} />
      </div>
      <div className="flex flex-col my-3">
        <span className="font-bold text-sm">{title}</span>
        <span className="font-bold text-xs ps-1">{content}</span>
      </div>
    </div>
  );
}
