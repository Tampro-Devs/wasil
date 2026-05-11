import { usePageTitle } from "../context/page.title.provider";

export default function PageTitle() {
  const { title } = usePageTitle();
  return (
    title && <h1 className="text-slate-400 font-bold text-lg">{title.text}</h1>
  );
}
