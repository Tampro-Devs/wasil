import { AppBackButton } from "../../../shared/components/app.button";
import { usePageHeader } from "../context/page.header.provider";

export default function PageHeader() {
  const { title, backText } = usePageHeader();
  return (
    <>
      {backText?.text && <AppBackButton label={`${backText?.text}`} />}
      {title && (
        <h1 className="text-slate-400 font-bold text-lg">{title.text}</h1>
      )}
    </>
  );
}
