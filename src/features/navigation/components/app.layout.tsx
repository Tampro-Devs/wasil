import { Outlet } from "react-router-dom";
import AppSidebar from "./app.sidebar";
import { SidebarProvider } from "../context/sidebar.provider";
import AppNavbar from "./app.navbar";
import PageTitle from "./page.header";
import { PageHeaderProvider } from "../context/page.header.provider";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="h-screen flex overflow-hidden">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <AppNavbar />
          <main className="pt-5 mx-5 overflow-y-auto">
            <PageHeaderProvider>
              <PageTitle />
              <Outlet />
            </PageHeaderProvider>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
