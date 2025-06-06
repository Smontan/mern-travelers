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
      if (window.innerWidth > 1024) setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="fixed top-0 right-0 left-0 w-full px-5 lg:px-10 z-50 backdrop-blur-2xl">
      <nav className="container flex lg:flex-row justify-between items-center gap-5 mx-auto h-[70px] max-w-[1366px] ">
        {/* Logo */}
        <Logo />
        {/* Mobile menu toggle */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={handleOpenMobileMenu}
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
        >
          <Menu size={32} />
        </div>
        {/* Navigation menu */}
        <div
          className={`
            flex-col lg:flex-row lg:items-center justify-between gap-6 ps-5 py-10 lg:py-10
            shadow-lg lg:shadow-none bg-background lg:bg-transparent lg:ps-0
            transition-transform duration-300 ease-in-out transform
            ${
              isOpen
                ? "absolute top-[70px] left-0 right-0 bg-white z-40 flex"
                : "hidden lg:flex"
            }
          `}
        >
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold border-b-2 border-current tracking-tight whitespace-nowrap lg:text-sm xl:text-base"
                  : "font-semibold border-b-2 border-transparent underline-border tracking-tight transition-all duration-300 lg:text-sm xl:text-base ease-in-out whitespace-nowrap"
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to={"/host"}
            className="inline-flex items-center gap-4 py-3 px-4 rounded-full w-fit bg-accent text-sm text-white font-semibold whitespace-nowrap outline outline-border hover:bg-primary transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Become a Host
            <UserPlus size={18} strokeWidth={2.5} />
          </NavLink>
          <Dropdown
            trigger={
              <div className="hidden lg:flex items-center gap-2 rounded-full ps-2.5 bg-white border-white outline outline-border border-4 cursor-pointer">
                <Menu width={24} height={24} className="cursor-pointer" />
                <div className="bg-gray-200 rounded-full border-gray-200 border-4 cursor-pointer hover:bg-gray-400 transition-colors duration-200 ease-in">
                  <UserRound fill="white" color="white" />
                </div>
              </div>
            }
          >
            {optionDropdownItems.map(({ path, label, icon: IconComponent }) => (
              <DropdownItem key={label}>
                <Link
                  to={path}
                  className="inline-flex items-center gap-4 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="rounded bg-primary text-white p-1.5 opacity-75">
                    {IconComponent && <IconComponent size={20} />}
                  </div>
                  <span className="whitespace-nowrap">{label}</span>
                </Link>
              </DropdownItem>
            ))}
          </Dropdown>
          {/* Mobile initial options inside menu */}
          {isOpen && (
            <div className="flex lg:hidden flex-col gap-3 w-full pt-5 border-t border-border font-semibold bg-white">
              {optionDropdownItems.map(({ path, label, icon: IconComponent }) => (
                <Link
                  to={path}
                  key={label}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex gap-4 items-center w-fit p-2 rounded-lg hover:bg-[#E9E9D1] transition-all duration-200 ease-in-out"
                >
                  {IconComponent && <IconComponent size={20} />}
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
