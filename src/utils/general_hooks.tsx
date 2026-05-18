import { useEffect } from "react";
import { usePageHeader } from "../features/navigation/context/page.header.provider";

export function setPageHeader(title: string, backText?: string) {
  const { setPageTitle, setBackText } = usePageHeader();

  useEffect(() => {
    setPageTitle({ text: title });
    setBackText({ text: backText });
  }, []);
}
