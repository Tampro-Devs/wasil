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
import {
  calculateAge,
  convertStringToDate,
  formatMoney,
} from "../../../utils/globals";
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
      <AppContentHeader>
        <div className="flex flex-col">
          <span className="font-bold">{member.name}</span>
          <div className="flex gap-2 items-center">
            <span className="w-fit px-3 text-xs rounded-full bg-blue-900 text-white">
              {member.gender}
            </span>
            <span className="text-xs bg-blue-900 text-white px-3 rounded-sm">
              {convertStringToDate(member.dob)} | {calculateAge(member.dob)}{" "}
              years
            </span>
          </div>
        </div>
      </AppContentHeader>
      <AppContentBody>
        <div className="flex flex-wrap gap-5 mb-3">
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
        <div className="mt-3 w-full">{currentTab.component}</div>
      </AppContentBody>
    </AppContentContainer>
  );
}

function MemberResidence({ member }: { member: Member }) {
  return (
    <div className="w-full sm:flex-1 flex flex-col border border-slate-300/30 p-2 rounded-sm">
      <div className="flex border-b border-b-slate-300/50">
        <MapPinHouse size={18} />
        <span className="text-sm">Residence</span>
      </div>
      <div className="flex gap-3 my-1">
        <div className="flex-1 flex border-b border-b-slate-300/50 p-1 border-r border-r-slate-600/30 gap-2 items-center">
          <span className="text-sm font-bold">Region: </span>
          <span className="text-xs">
            {member.residence.street.ward.district.region.name}
          </span>
        </div>
        <div className="flex-1 flex border-b border-b-slate-300/50 gap-2 items-center">
          <span className="text-sm font-bold">District: </span>
          <span className="text-xs">
            {member.residence.street.ward.district.name}
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 flex border-b border-b-slate-300/50 p-1 border-r border-r-slate-600/30 gap-2 items-center">
          <span className="text-sm font-bold">Ward: </span>
          <span className="text-xs">{member.residence.street.ward.name}</span>
        </div>
        <div className="flex-1 flex border-b border-b-slate-300/50 gap-2 items-center">
          <span className="text-sm font-bold">Street: </span>
          <span className="text-xs">{member.residence.street.name}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold">House No: </span>
        <span className="text-xs">{member.residence.houseNo}</span>
      </div>
    </div>
  );
}

function MemberContribution() {
  return (
    <div className="w-full sm:flex-1 flex flex-col border border-slate-300/30 p-2 rounded-sm">
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
  return (
    <div className="w-full sm:flex-1 flex flex-col border border-slate-300/30 p-2 rounded-sm">
      <div className="flex border-b border-b-slate-300/50">
        <Banknote size={18} />
        <span className="text-sm">Education</span>
      </div>

      <div className="flex px-2 py-3 border-b border-b-slate-300/50 gap-2 items-center">
        <span className="text-sm font-bold">Level: </span>
        <span className={`text-sm text-center rounded-full`}>
          Bachelor's Degree
        </span>
      </div>

      <div className="flex p-2 gap-2 items-center">
        <span className="text-xs">Bachelor of Science with Education</span>
      </div>
    </div>
  );
}
