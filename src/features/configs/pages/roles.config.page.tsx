import { useEffect } from "react";
import { usePageTitle } from "../../navigation/context/page.title.provider";

export default function RolesConfigPage() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    const title = { text: "Roles" };
    setPageTitle(title);
  }, []);
  return <div>RolesConfigPage</div>;
}
