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
import HQLeaderForm from "../../components/forms/hq.leader.form";
import BranchLeaderForm from "../../components/forms/branch.leader.form";
import DistricLeaderForm from "../../components/forms/district.leader.form";
import WardLeaderForm from "../../components/forms/ward.leader.form";
import StreetLeaderForm from "../../components/forms/street.leader.form";
import { Can } from "../../../auth/components/can";
import { AUTH_PERMISSIONS } from "../../../auth/types/permissions";

export default function LeadershipMainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpenHQForm, setIsOpenHQForm] = useState(false);
  const [isOpenBranchForm, setIsOpenBranchForm] = useState(false);
  const [isOpenDistrictForm, setIsOpenDistrictForm] = useState(false);
  const [isOpenWardForm, setIsOpenWardForm] = useState(false);
  const [isOpenStreetForm, setIsOpenStreetForm] = useState(false);
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

  function handleAddButtonClick() {
    switch (currentIndex) {
      case 0:
        setIsOpenHQForm(true);
        setIsOpenBranchForm(false);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(false);
        break;

      case 1:
        setIsOpenHQForm(false);
        setIsOpenBranchForm(true);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(false);
        break;

      case 2:
        setIsOpenHQForm(false);
        setIsOpenBranchForm(false);
        setIsOpenDistrictForm(true);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(false);
        break;

      case 3:
        setIsOpenHQForm(false);
        setIsOpenBranchForm(false);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(true);
        setIsOpenStreetForm(false);
        break;

      case 4:
        setIsOpenHQForm(false);
        setIsOpenBranchForm(false);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(true);
        break;

      default:
        setIsOpenBranchForm(false);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(false);
        break;
    }
  }
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
          actions={
            <Can permissions={[AUTH_PERMISSIONS.LEADER_ADD]}>
              <AppIconButton Icon={LuPlus} onClick={handleAddButtonClick} />
            </Can>
          }
        />
        <AppContentBody>
          <Can permissions={[AUTH_PERMISSIONS.LEADER_ADD]}>
            <HQLeaderForm isOpen={isOpenHQForm} setIsOpen={setIsOpenHQForm} />
            <BranchLeaderForm
              isOpen={isOpenBranchForm}
              setIsOpen={setIsOpenBranchForm}
            />
            <DistricLeaderForm
              isOpen={isOpenDistrictForm}
              setIsOpen={setIsOpenDistrictForm}
            />
            <WardLeaderForm
              isOpen={isOpenWardForm}
              setIsOpen={setIsOpenWardForm}
            />
            <StreetLeaderForm
              isOpen={isOpenStreetForm}
              setIsOpen={setIsOpenStreetForm}
            />
          </Can>
          {sideLinksTags[currentIndex].section}
        </AppContentBody>
      </AppContentContainer>
    </div>
  );
}
