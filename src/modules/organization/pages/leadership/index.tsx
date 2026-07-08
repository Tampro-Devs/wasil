import { AppIconButton } from "../../../../shared/components/app.button";
import {
  AppContentBody,
  AppContentContainer,
  AppContentHeader,
} from "../../../../shared/components/app.content.container";
import { setPageHeader } from "../../../../utils/general_hooks";
import HQLeadersSection from "../../components/hq.leaders.section";
import { useState } from "react";
import BranchLeadersSection from "../../components/branch.leaders.section";
import DistrictLeadersSection from "../../components/district.leaders.section";
import WardLeadersSection from "../../components/ward.leaders.section";
import StreetLeadersSection from "../../components/street.leaders.section";
import SideLinkItem from "../../../../shared/components/side.link.item";
import { LuPlus } from "react-icons/lu";

export default function LeadershipMainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  setPageHeader("Leadership");

  const sideLinksTags = [
    {
      index: 0,

      text: "HQ Leaders",
      section: <HQLeadersSection />,
    },
    {
      index: 1,
      text: "Branch Leaders",
      section: <BranchLeadersSection />,
    },
    {
      index: 2,
      text: "District Leaders",
      section: <DistrictLeadersSection />,
    },
    {
      index: 3,
      text: "Ward Leaders",
      section: <WardLeadersSection />,
    },
    {
      index: 4,
      text: "Street Leaders",
      section: <StreetLeadersSection />,
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-3">
      <AppContentContainer className="w-full lg:w-44 h-fit">
        <AppContentBody className="items-center-safe justify-center-safe">
          {sideLinksTags.map((tag, _) => (
            <SideLinkItem
              className="w-28 text-center lg:w-full"
              key={tag.index}
              text={tag.text}
              isActive={tag.index == currentIndex}
              onClick={() => {
                setCurrentIndex(tag.index);
              }}
            />
          ))}
        </AppContentBody>
      </AppContentContainer>

      <AppContentContainer className="flex-1">
        <AppContentHeader
          title={sideLinksTags[currentIndex].text}
          actions={<AppIconButton Icon={LuPlus} />}
        />
        <AppContentBody>{sideLinksTags[currentIndex].section}</AppContentBody>
      </AppContentContainer>
    </div>
  );
}
