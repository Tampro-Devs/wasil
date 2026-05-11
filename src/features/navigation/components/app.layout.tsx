import { Outlet } from "react-router-dom";
import AppSidebar from "./app.sidebar";
import { SidebarProvider } from "../context/sidebar.provider";
import AppNavbar from "./app.navbar";
import { PageTitleProvider } from "../context/page.title.provider";
import PageTitle from "./page.title";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="h-screen flex overflow-hidden">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <AppNavbar />
          <main className="pt-5 mx-5 overflow-y-auto">
            <PageTitleProvider>
              <PageTitle />
              <Outlet />
            </PageTitleProvider>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
