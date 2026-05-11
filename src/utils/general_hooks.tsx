import { useEffect } from "react";
import { usePageTitle } from "../features/navigation/context/page.title.provider";

export function setPageTitle(title: string) {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle({ text: title });
  }, []);
}
