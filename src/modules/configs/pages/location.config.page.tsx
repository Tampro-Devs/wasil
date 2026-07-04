import { useState } from "react";
import { setPageHeader } from "../../../utils/general_hooks";
import RegionsSection from "../components/regions.section";
import DistrictsSection from "../components/districts.section";
import WardsSection from "../components/wards.section";
import StreetsSection from "../components/streets.section";
import { RegionForm } from "../components/forms/region.form";
import { DistrictForm } from "../components/forms/district.form";
import { WardForm } from "../components/forms/ward.form";
import { StreetForm } from "../components/forms/street.form";
import {
  AppContentBody,
  AppContentContainer,
  AppContentHeader,
} from "../../../shared/components/app.content.container";
import { AppIconButton } from "../../../shared/components/app.button";
import SideLinkItem from "../../../shared/components/side.link.item";
import { LuPlus } from "react-icons/lu";

export default function LocationsConfigPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpenRegionForm, setIsOpenRegionForm] = useState(false);
  const [isOpenDistrictForm, setIsOpenDistrictForm] = useState(false);
  const [isOpenWardForm, setIsOpenWardForm] = useState(false);
  const [isOpenStreetForm, setIsOpenStreetForm] = useState(false);

  setPageHeader("Locations");

  const locationTags = [
    {
      index: 0,
      text: "Regions",
      section: <RegionsSection />,
    },
    {
      index: 1,
      text: "Districts",
      section: <DistrictsSection />,
    },
    {
      index: 2,
      text: "Wards",
      section: <WardsSection />,
    },
    {
      index: 3,
      text: "Streets",
      section: <StreetsSection />,
    },
  ];

  function handleAddButtonClick() {
    switch (currentIndex) {
      case 0:
        setIsOpenRegionForm(true);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(false);
        break;

      case 1:
        setIsOpenRegionForm(false);
        setIsOpenDistrictForm(true);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(false);
        break;

      case 2:
        setIsOpenRegionForm(false);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(true);
        setIsOpenStreetForm(false);
        break;

      case 3:
        setIsOpenRegionForm(false);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(true);
        break;

      default:
        setIsOpenRegionForm(false);
        setIsOpenDistrictForm(false);
        setIsOpenWardForm(false);
        setIsOpenStreetForm(false);
        break;
    }
  }
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <AppContentContainer className="w-full lg:w-44 h-fit">
        <AppContentBody className="items-center-safe justify-center-safe">
          {locationTags.map((tag, _) => (
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
          title={locationTags[currentIndex].text}
          actions={
            <AppIconButton Icon={LuPlus} onClick={handleAddButtonClick} />
          }
        />
        <AppContentBody className="w-full">
          <RegionForm
            isOpen={isOpenRegionForm}
            setIsOpen={setIsOpenRegionForm}
          />
          <DistrictForm
            isOpen={isOpenDistrictForm}
            setIsOpen={setIsOpenDistrictForm}
          />
          <WardForm isOpen={isOpenWardForm} setIsOpen={setIsOpenWardForm} />
          <StreetForm
            isOpen={isOpenStreetForm}
            setIsOpen={setIsOpenStreetForm}
          />
          {locationTags[currentIndex].section}
        </AppContentBody>
      </AppContentContainer>
    </div>
  );
}
