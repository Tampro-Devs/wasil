import { useEffect } from "react";
import { usePageTitle } from "../../navigation/context/page.title.provider";

export default function LocationsConfigPage() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    const title = { text: "Locations" };
    setPageTitle(title);
  }, []);
  return <div>LocationsConfigPage</div>;
}
