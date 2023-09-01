import { useState } from "react";
import { motion } from "framer-motion";

import Button from "./Button";
import Logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
import MenuIcon from "../assets/icon-menu.svg";
import CloseIcon from "../assets/icon-close-menu.svg";

import {
  companyLinks,
  fadeInVariants,
  featureLinks,
  links,
} from "../config/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const NavToggle = isOpen ? CloseIcon : MenuIcon;

  return (
    <nav className="relative flex justify-between items-center px-8 py-6">
      {isOpen && (
        <div className="overlay transition max-sm:block hidden fixed z-30 top-0 left-0 w-full min-h-screen bg-neutral-900/70" />
      )}

      <button
        onClick={handleClick}
        className="hidden max-sm:block absolute top-7 right-6 z-50 text-near-black"
      >
        <img src={NavToggle} alt={isOpen ? "close menu" : "open menu"} />
      </button>

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mr-16"
      >
        <img src={Logo} alt="snap logo" className="w-full" />
      </motion.div>

      <div
        className={`flex z-40 items-center w-full duration-[400ms] max-sm:fixed max-sm:inset-y-0 max-sm:px-6 max-sm:right-0 max-sm:left-[30%] max-sm:overflow-auto max-sm:pb-8 max-sm:flex-col max-sm:h-full max-sm:items-start max-sm:bg-off-white max-sm:pt-[4em] transition ${
          isOpen ? "max-sm:translate-x-[0%]" : "max-sm:translate-x-[100%]"
        }`}
      >
        <div className="mr-auto">
          <ul className="flex max-sm:flex-col max-sm:items-start max-sm:gap-y-5 items-center gap-x-10">
            <Dropdown title="Features" className="-left-[72px] w-full md:w-max">
              {featureLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center gap-x-3 justify-start mb-3 last:mb-0"
                >
                  <span>
                    <img src={link.icon} alt="icon" />
                  </span>
                  <a
                    href="#"
                    className="text-base lg:text-lg font-medium text-medium-gray"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </Dropdown>

            <Dropdown title="Company" className="w-full md:w-max">
              {companyLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center gap-x-3 justify-start mb-3 last:mb-0"
                >
                  <a
                    href="#"
                    className="text-base lg:text-lg font-medium text-medium-gray"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </Dropdown>

            {links.map((link) => (
              <li key={link.id} className="text-base lg:text-lg">
                <a
                  href={link.href}
                  className="font-medium text-medium-gray hover:text-near-black transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex max-sm:flex-col items-center gap-4 max-sm:mt-8 max-sm:w-[67%]">
          <Button className="border-0">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
