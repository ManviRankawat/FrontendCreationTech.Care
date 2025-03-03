import React from "react";
import Doctor from "./Components/Doctor";
import Logo from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/TestLogo.svg";
import DoctorWoman from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/SeniorWomanDoc.png";
import Settings from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/setting.svg";
import More from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/3dots.png";

// Import navigation icons
import OverviewIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/overview.svg";
import PatientsIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/patients.svg";
import ScheduleIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/schedule.png";
import MessageIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/message.svg";
import TransactionsIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/transactions.svg";

const navItems = [
  { name: "Overview", img: OverviewIcon },
  { name: "Patients", img: PatientsIcon },
  { name: "Schedule", img: ScheduleIcon },
  { name: "Message", img: MessageIcon },
  { name: "Transactions", img: TransactionsIcon },
];

const TopNavbar = () => {
  return (
    <div
      className="bg-white shadow-md flex items-center justify-between px-6 py-3"
      style={{
        position: "absolute",
        top: "18px",
        left: "18px",
        width: "1564px",
        height: "72px",
        borderRadius: "70px",
        opacity: "1",
      }}
    >
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Tech.Care Logo" className="w-[211px] h-[48px]" />
      </div>

      {/* Center: Navigation Menu */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <NavItem key={item.name} name={item.name} img={item.img} active={item.name === "Patients"} />
        ))}
      </nav>

      {/* Right: User Profile */}
      <div className="p-5">
            <Doctor doctorImage={DoctorWoman} settingsIcon={Settings} moreIcon={More} />
        </div>
    </div>
  );
};

// Navigation Item Component (with Image)
const NavItem = ({ name, img, active }) => (
  <a
    href="#"
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
      active ? "bg-teal-300 text-black font-bold" : "text-gray-700 hover:text-gray-900"
    }`}
  >
    <img src={img} alt={name} className="w-5 h-5" />
    <span>{name}</span>
  </a>
);

export default TopNavbar;
