import { useParams } from "react-router-dom";
import { useFindBy } from "../../../shared/hooks/global.hooks";
import { membersDummies, type Member } from "../types/member.type";
import NotFound from "../../../shared/components/not-found";
import { setPageHeader } from "../../../utils/general_hooks";
import {
  AppContentBody,
  AppContentContainer,
  AppContentHeader,
} from "../../../shared/components/app.content.container";
import { Banknote, MapPinHouse } from "lucide-react";
import { formatMoney } from "../../../utils/globals";
import { useState } from "react";
import MemberBasicInfoSection from "../components/member.basic.info.section";
import MemberContributionSection from "../components/member.contribution.section";

const tabs = [
  {
    title: "Basic",
    component: <MemberBasicInfoSection />,
  },
  {
    title: "Contribution",
    component: <MemberContributionSection />,
  },
];

export default function MemberPreviewPage() {
  const { memberId } = useParams();
  const memberList = useFindBy(membersDummies, "memberId", `${memberId}`);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const member = memberList.length > 0 ? memberList[0] : null;

  setPageHeader("Member Preview", "Back To Members");

  if (member == null) {
    return (
      <NotFound
        isContent={true}
        title="Member Not Found"
        message="Member you are trying to preview is not found, kindly confirm availability"
      />
    );
  }
  return (
    <AppContentContainer>
      <AppContentHeader title={member.name} />
      <AppContentBody>
        <div className="flex gap-5 mb-3">
          <MemberResidence member={member} />
          <MemberContribution />
          <MemberEducation />
        </div>

        <div className="w-fit flex gap-5 bg-slate-300/30 rounded-full px-2 py-1 mt-3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`w-32 text-sm text-center rounded-full cursor-pointer
                ${currentTab == tab ? "bg-blue-900 text-blue-400 border border-blue-900" : "border border-slate-300 text-slate-400"}`}
              onClick={() => {
                setCurrentTab(tab);
              }}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="mt-3">{currentTab.component}</div>
      </AppContentBody>
    </AppContentContainer>
  );
}

function MemberResidence({ member }: { member: Member }) {
  return (
    <div className="flex flex-col border border-slate-300/30 p-2 rounded-sm">
      <div className="flex border-b border-b-slate-300/50">
        <MapPinHouse size={18} />
        <span className="text-sm">Residence</span>
      </div>
      <div className="flex gap-3 my-1">
        <div className="w-40 flex border-b border-b-slate-300/50 p-1 border-r border-r-slate-600/30 gap-2 items-center">
          <span className="text-sm font-bold">Region: </span>
          <span className="text-xs">
            {member.residence.ward.district.region.name}
          </span>
        </div>
        <div className="w-40 flex border-b border-b-slate-300/50 gap-2 items-center">
          <span className="text-sm font-bold">District: </span>
          <span className="text-xs">{member.residence.ward.district.name}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-40 flex border-b border-b-slate-300/50 p-1 border-r border-r-slate-600/30 gap-2 items-center">
          <span className="text-sm font-bold">Ward: </span>
          <span className="text-xs">{member.residence.ward.name}</span>
        </div>
        <div className="w-40 flex border-b border-b-slate-300/50 gap-2 items-center">
          <span className="text-sm font-bold">Street: </span>
          <span className="text-xs">{member.residence.name}</span>
        </div>
      </div>
    </div>
  );
}

function MemberContribution() {
  return (
    <div className="w-80 flex flex-col border border-slate-300/30 p-2 rounded-sm">
      <div className="flex border-b border-b-slate-300/50">
        <Banknote size={18} />
        <span className="text-sm">Contribution</span>
      </div>

      <div className="flex px-2 py-3 border-b border-b-slate-300/50 gap-2 items-center">
        <span className="text-sm font-bold">Total Amount: </span>
        <span className="text-xs">{formatMoney(30000)}</span>
      </div>

      <div className="flex p-2 gap-2 items-center">
        <span className="text-sm font-bold">Total Month(s): </span>
        <span className="text-xs">3</span>
      </div>
    </div>
  );
}

function MemberEducation() {
  const category = "Sharia";
  return (
    <div className="w-80 flex flex-col border border-slate-300/30 p-2 rounded-sm">
      <div className="flex border-b border-b-slate-300/50">
        <Banknote size={18} />
        <span className="text-sm">Education</span>
      </div>

      <div className="flex px-2 py-3 border-b border-b-slate-300/50 gap-2 items-center">
        <span className="text-sm font-bold">Category: </span>
        <span
          className={`w-20 text-sm text-center rounded-full ${category == "Sharia" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}
        >
          {category}
        </span>
      </div>

      <div className="flex p-2 gap-2 items-center">
        <span className="text-xs">
          Bachelor of Science in Information Technology
        </span>
      </div>
    </div>
  );
}
