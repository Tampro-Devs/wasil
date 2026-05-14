import { useState } from "react";
import { setPageTitle } from "../../../utils/general_hooks";
import ConfigLinkItem from "../components/config.link.item";
import RegionsSection from "../components/sections/regions.section";
import DistrictsSection from "../components/sections/districts.section";
import WardsSection from "../components/sections/wards.section";
import StreetsSection from "../components/sections/streets.section";
import { Plus } from "lucide-react";
import { RegionForm } from "../components/forms/region.form";
import { DistrictForm } from "../components/forms/district.form";
import { WardForm } from "../components/forms/ward.form";
import { StreetForm } from "../components/forms/street.form";
import AppContentContainer from "../../../shared/components/app.content.container";
import AppButton from "../../../shared/components/app.button";

export default function LocationsConfigPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpenRegionForm, setIsOpenRegionForm] = useState(false);
  const [isOpenDistrictForm, setIsOpenDistrictForm] = useState(false);
  const [isOpenWardForm, setIsOpenWardForm] = useState(false);
  const [isOpenStreetForm, setIsOpenStreetForm] = useState(false);

  setPageTitle("Locations");

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
    <div className="flex gap-5">
      <AppContentContainer className="w-44 h-40">
        {locationTags.map((tag, _) => (
          <ConfigLinkItem
            key={tag.index}
            text={tag.text}
            isActive={tag.index == currentIndex}
            onClick={() => {
              setCurrentIndex(tag.index);
            }}
          />
        ))}
      </AppContentContainer>
      <AppContentContainer
        className="flex-1"
        title={locationTags[currentIndex].text}
        actions={
          <AppButton
            size="xs"
            variant="secondary"
            onClick={handleAddButtonClick}
          >
            <Plus />
          </AppButton>
        }
      >
        <RegionForm isOpen={isOpenRegionForm} setIsOpen={setIsOpenRegionForm} />
        <DistrictForm
          isOpen={isOpenDistrictForm}
          setIsOpen={setIsOpenDistrictForm}
        />
        <WardForm isOpen={isOpenWardForm} setIsOpen={setIsOpenWardForm} />
        <StreetForm isOpen={isOpenStreetForm} setIsOpen={setIsOpenStreetForm} />
        {locationTags[currentIndex].section}
      </AppContentContainer>
    </div>
  );
}
