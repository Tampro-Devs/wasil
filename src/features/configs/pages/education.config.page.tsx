import { useEffect } from "react";
import { usePageTitle } from "../../navigation/context/page.title.provider";

export default function EducationConfigPage() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    const title = { text: "Education" };
    setPageTitle(title);
  }, []);
  return <div>EducationConfigPage</div>;
}
