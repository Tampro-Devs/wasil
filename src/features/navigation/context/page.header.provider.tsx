import { createContext, useContext, useState } from "react";

export interface PageHeaderItem {
  text?: string;
}

interface BreadCrumbContextValue {
  title?: PageHeaderItem;
  setPageTitle: (title: PageHeaderItem) => void;
  backText?: PageHeaderItem;
  setBackText: (title?: PageHeaderItem) => void;
}

const PageHeaderContext = createContext<BreadCrumbContextValue | null>(null);

export function PageHeaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setPageTitle] = useState<PageHeaderItem>();
  const [backText, setBackText] = useState<PageHeaderItem>();

  return (
    <PageHeaderContext.Provider
      value={{ title, setPageTitle, backText, setBackText }}
    >
      {children}
    </PageHeaderContext.Provider>
  );
}

export function usePageHeader() {
  const context = useContext(PageHeaderContext);
  if (!context) {
    throw new Error("usePageHeader should be used within PageHeaderProvider");
  }
  return context;
}
