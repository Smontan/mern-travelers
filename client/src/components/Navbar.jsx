import { Menu, UserPlus, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

import { navLinks, optionDropdownItems } from "../constants";
import Dropdown, { DropdownItem } from "./Dropdown";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false); // Check if the screen size is lg or large if it is then setIsOpen to false
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove event resize on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container flex  lg:flex-row justify-between items-center gap-5 fixed top-0 right-0 left-0 mx-auto h-[70px] max-w-[1366px] px-4.75 backdrop-blur-sm z-50">
      {/* Logo section */}
      <Logo />

      {/* Toggle button for mobile display */}
      <div
        className="lg:hidden lg:scale-0 cursor-pointer"
        onClick={handleOpenMobileMenu}
        aria-expanded={isOpen}
        aria-label="Toggle mobile menu"
      >
        <Menu size={32} />
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col lg:flex-row lg:items-center lg:top-0 lg:mt-0 lg:static justify-between gap-6 ps-2 lg:ps-0 transition-all duration-300 ease-in-out ${
          isOpen ? "flex absolute top-[70px] mt-5" : "hidden"
        } lg:flex`}
      >
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={label}
            to={path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-semibold border-b-2 tracking-tight whitespace-nowrap lg:text-sm xl:text-base"
                : "font-semibold tracking-tight hover:opacity-80 transition-opacity duration-200 lg:text-sm xl:text-base ease-in-out whitespace-nowrap"
            }
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          to={"/host"}
          className="inline-flex items-center gap-4 py-3 px-4 rounded-full w-fit bg-accent text-sm text-white font-semibold whitespace-nowrap outline outline-border hover:bg-primary transition-all duration-300"
        >
          Become a Host
          <UserPlus size={18} strokeWidth={2.5} />
        </NavLink>
        {/* Initial option */}
        <Dropdown
          trigger={
            <div className="hidden lg:flex items-center gap-2 rounded-full ps-2.5 bg-white border-white outline outline-border border-4  cursor-pointer">
              <Menu width={24} height={24} className="cursor-pointer" />
              <div className="bg-gray-200 rounded-full border-gray-200 border-4 cursor-pointer hover:bg-gray-400 transition-colors duration-200 ease-in">
                <UserRound fill="white" color="white" />
              </div>
            </div>
          }
        >
          {/* Options are Signup , Login Help Center */}
          {optionDropdownItems.map(({ path, label, icon: IconComponent }) => (
            <DropdownItem key={label}>
              <Link
                to={path}
                className="inline-flex items-center gap-4 text-sm"
              >
                <div className="rounded bg-primary text-white p-1.5 opacity-75">
                  {IconComponent && <IconComponent size={20} />}
                </div>
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Mobile view initial option */}
        {isOpen && (
          <div className="flex lg:hidden flex-col justify-between  w-lg pt-5 border-t border-border font-semibold">
            {optionDropdownItems.map(({ path, label, icon: IconComponent }) => (
              <Link
                to={path}
                key={label}
                onClick={() => setIsOpen(false)}
                className="inline-flex gap-4 items-center w-fit p-2 pe-15 rounded-lg hover:bg-[#E9E9D1] transition-all duration-200 ease-in-out"
              >
                {IconComponent && <IconComponent size={20} />}
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
