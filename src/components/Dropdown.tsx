import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import CaretDown from "../assets/icon-arrow-down.svg";
import CaretUp from "../assets/icon-arrow-up.svg";

import { heightVariants } from "../config/utils";

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
        <span className="text-base lg:text-lg font-medium text-medium-gray hover:text-near-black transition">
          {title}
        </span>
        <span>
          <img
            src={isOpen ? CaretUp : CaretDown}
            alt={!isOpen ? "open dropdown" : "close dropdown"}
          />
        </span>
      </div>

      {isOpen && (
        <motion.div
          variants={heightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={twMerge(
            `md:bg-white md:absolute top-10 rounded-lg w-40 px-7 py-4 md:drop-shadow-lg`,
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
