import { Link } from "react-router-dom";

import { CashIcon } from "@/assets/svgs/icons/cash-icon";
import { HomeIcon } from "@/assets/svgs/icons/home-icon";
import { InventoryLineIcon } from "@/assets/svgs/icons/inventory-line-icon";
import { ToolIcon } from "@/assets/svgs/icons/tool-icon";

export default function Sidebar() {
  const SidebarNavLinks = [
    {
      href: "/dashboard/overview",
      label: "Dashboard",
      icon: <HomeIcon />,
    },
    {
      href: "/dashboard/manage-inventory",
      label: "Manage Inventory",
      icon: <InventoryLineIcon />,
    },
    {
      href: "/dashboard/profit-loss",
      label: "Profit and Loss",
      icon: <CashIcon />,
    },
    {
      href: "/dashboard/settings",
      label: "Tools",
      icon: <ToolIcon />,
    },
  ];

  return (
    <>
      <div
        id="application-sidebar"
        className="fixed inset-y-0 start-0 z-[60] w-64 -translate-x-full overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 ease-in-out lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2"
      >
        <div className="flex items-center justify-center px-6">
          <Link
            className="flex-none text-xl font-semibold"
            to="/dashboard/dashboard"
            aria-label="Brand"
          >
            Logo
          </Link>
        </div>

        <nav className="flex w-full flex-col flex-wrap pb-3 pt-6 lg:pt-10">
          <ul>
            {SidebarNavLinks.map(({ href, icon, label }) => (
              <Link to={href} key={label}>
                <div className="border-b-1 border-gray-200 py-3 hover:bg-gray-100 lg:py-4">
                  <li className="px-4">
                    <div className="flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-slate-700">
                      {icon}
                      {label}
                    </div>
                  </li>
                </div>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div
        aria-hidden
        id="application-sidebar-backdrop"
        style={{ zIndex: "49" }}
        className="duration fixed inset-0 hidden bg-gray-900/50 transition"
        onClick={() => {
          const sidebar = document.querySelector("#application-sidebar");
          const sidebarOverlay = document.querySelector(
            "#application-sidebar-backdrop",
          );
          sidebar?.classList.toggle("translate-x-0");
          sidebarOverlay?.classList.toggle("hidden");
        }}
      ></div>
    </>
  );
}
