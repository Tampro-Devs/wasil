import { Outlet } from "react-router-dom";
import AppSidebar from "./app.sidebar";
import { SidebarProvider } from "../context/sidebar.provider";
import AppNavbar from "./app.navbar";
import PageTitle from "./page.header";
import { PageHeaderProvider } from "../context/page.header.provider";
import { Bounce, ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-y-hidden">
        <AppSidebar />
        <div className="flex flex-col w-screen">
          <AppNavbar />
          <main className="pt-5 ms-5 me-3 mb-5 overflow-y-auto">
            <PageHeaderProvider>
              <PageTitle />
              <Outlet />
            </PageHeaderProvider>
          </main>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </SidebarProvider>
  );
}
