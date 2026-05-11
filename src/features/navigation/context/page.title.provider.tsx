import { createContext, useContext, useState } from "react";

export interface PageTitleItem {
  text: string;
}

interface BreadCrumbContextValue {
  title?: PageTitleItem;
  setPageTitle: (title: PageTitleItem) => void;
}

const PageTitleContext = createContext<BreadCrumbContextValue | null>(null);

export function PageTitleProvider({ children }: { children: React.ReactNode }) {
  const [title, setPageTitle] = useState<PageTitleItem>();

  return (
    <PageTitleContext.Provider value={{ title, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}

export function usePageTitle() {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error("usePageTitle should be used within PageTitleProvider");
  }
  return context;
}
