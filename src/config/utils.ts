import TodoIcon from "../assets/icon-todo.svg";
import CalendarIcon from "../assets/icon-calendar.svg";
import ReminderIcon from "../assets/icon-reminders.svg";
import PlanningIcon from "../assets/icon-planning.svg";

import ClientOne from "../assets/client-databiz.svg";
import ClientTwo from "../assets/client-audiophile.svg";
import ClientThree from "../assets/client-meet.svg";
import ClientFour from "../assets/client-maker.svg";

export const links = [
  { id: 3, href: "#", name: "Careers" },
  { id: 4, href: "#", name: "About" },
];

export const featureLinks = [
  { id: 1, icon: TodoIcon, name: "Todo List" },
  { id: 2, icon: CalendarIcon, name: "Calendar" },
  { id: 3, icon: ReminderIcon, name: "Reminders" },
  { id: 4, icon: PlanningIcon, name: "Planning" },
];

export const companyLinks = [
  { id: 1, name: "History" },
  { id: 2, name: "Our Team" },
  { id: 3, name: "Blog" },
];

export const clients = [
  { id: 1, src: ClientOne, name: "databiz" },
  { id: 2, src: ClientTwo, name: "audiophile" },
  { id: 3, src: ClientThree, name: "meet" },
  { id: 4, src: ClientFour, name: "maker" },
];

export const fadeInRightVariants = {
  hidden: {
    opacity: 0,
    x: "-10px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeInLeftVariants = {
  hidden: {
    opacity: 0,
    x: "10px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const heightVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};
