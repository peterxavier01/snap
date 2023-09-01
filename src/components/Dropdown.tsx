import { useState } from "react";
import CaretDown from "../assets/icon-arrow-down.svg";
import CaretUp from "../assets/icon-arrow-up.svg";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative select-none">
      <div
        className="flex items-center gap-x-2 cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-lg font-medium text-medium-gray hover:text-near-black transition">
          {title}
        </span>
        <span className="mt-1">
          <img
            src={isOpen ? CaretUp : CaretDown}
            alt={!isOpen ? "open dropdown" : "close dropdown"}
          />
        </span>
      </div>

      {isOpen && (
        <div
          className={twMerge(
            `md:bg-white md:absolute top-10 rounded-lg w-40 px-7 py-4 md:drop-shadow-lg`,
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
