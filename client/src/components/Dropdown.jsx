import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const Dropdown = ({ children, trigger }, ...props) => {
  // State for showing the dropdown menu or not
  const [show, setShow] = useState(false);
  // Toggle fn for dropdown
  const handleClickToggle = () => {
    setShow((curr) => !curr);
  };
  // Custom hook for closing the dropdown if its click outside the dropdown menu
  const dropdownRef = useClickOutside(() => setShow(false));

  return (
    <div
      onClick={handleClickToggle}
      className="relative w-fit"
      ref={dropdownRef}
      {...props}
    >
      <div>{trigger}</div>
      <ul
        className={`absolute right-0 mt-2 p-1 bg-background border-border border rounded-lg shadow overflow-hidden transition-all duration-500 ease-in-out ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } `}
      >
        {show && children}
      </ul>
    </div>
  );
};

export const DropdownItem = ({ children }) => {
  return (
    <li className="flex items-center gap-3 py-2 ps-2 pe-10 rounded hover:bg-[#E9E9D1] transition-colors duration-500 ease-in-out font-semibold cursor-pointer">
      {children}
    </li>
  );
};
export default Dropdown;
