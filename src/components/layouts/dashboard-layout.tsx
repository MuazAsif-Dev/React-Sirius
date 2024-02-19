import { Outlet } from "react-router-dom";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout() {
  return (
    <main className="flex min-h-dvh flex-col">
      <Header />
      <Sidebar />
      <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">
        <Outlet />
      </div>
    </main>
  );
}
