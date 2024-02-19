import { Link } from "react-router-dom";

import { HamburgerLineIcon } from "@/assets/svgs/icons/hamburger-line-icon";
import { SearchIcon } from "@/assets/svgs/icons/search-icon";
import Input from "@/components/ui/input";

export default function Header() {
  function MobileHamburgerMenu() {
    const toggleSidebarMenu = () => {
      const sidebar = document.querySelector("#application-sidebar");
      const sidebarOverlay = document.querySelector(
        "#application-sidebar-backdrop",
      );
      sidebar?.classList.toggle("translate-x-0");
      sidebarOverlay?.classList.toggle("hidden");
    };

    return (
      <div className="me-5 flex gap-4 lg:me-0 lg:hidden">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600"
          aria-label="Toggle navigation"
          onClick={toggleSidebarMenu}
        >
          <span className="sr-only">Toggle Navigation</span>
          <HamburgerLineIcon />
        </button>
      </div>
    );
  }

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap py-2.5 backdrop-blur-lg sm:flex-nowrap sm:justify-start sm:py-6 lg:ps-64">
        <nav
          className="mx-auto flex w-full basis-full items-center px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <MobileHamburgerMenu />
          <div className="me-5 lg:me-0 lg:size-0">
            <Link
              className="flex-none text-xl font-semibold"
              to="/dealer/dashboard"
              aria-label="Brand"
            >
              Logo
            </Link>
          </div>

          <div className="ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
            <div className="hidden w-full sm:block">
              <Input
                placeholder="Ask me anything..."
                startContent={
                  <SearchIcon className="pointer-events-none shrink-0" />
                }
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
