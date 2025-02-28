import React from "react";
import SearchIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/search.svg";
import EmilyImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Emily.png";
import RyanImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Ryan.png";
import BrandonImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Brandon.png";
import JessicaImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Jessica.png";
import SamanthaImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Samantha.png";
import AshleyImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Ashley.png";
import OliviaImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Olivia.png";
import TylerImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Tyler.png";
import KevinImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Kevin.png";
import DylanImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Dylan.png";
import NathanImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Nathan.png";
import MikeImage from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Mike.png";
import MoreHorizIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/more_horiz.svg";


const patients = [
  { name: "Emily Williams", age: 28, gender: "Female", image: EmilyImage },
  { name: "Ryan Johnson", age: 35, gender: "Male", image: RyanImage },
  { name: "Brandon Mitchell", age: 40, gender: "Male", image: BrandonImage },
  { name: "Jessica Taylor", age: 31, gender: "Female", image: JessicaImage },
  { name: "Samantha Johnson", age: 29, gender: "Female", image: SamanthaImage },
  { name: "Ashley Martinez", age: 34, gender: "Female", image: AshleyImage },
  { name: "Olivia Brown", age: 28, gender: "Female", image: OliviaImage },
  { name: "Tyler Davis", age: 35, gender: "Male", image: TylerImage },
  { name: "Kevin Anderson", age: 40, gender: "Male", image: KevinImage },
  { name: "Dylan Thompson", age: 31, gender: "Female", image: DylanImage },
  { name: "Nathan Evans", age: 29, gender: "Male", image: NathanImage },
  { name: "Mike Nolan", age: 34, gender: "Male", image: MikeImage }
];

const PatientCard = ({ patient }) => (
    <div className={`flex items-center p-3  cursor-pointer hover:bg-gray-200 ${patient.name === "Jessica Taylor" ? "bg-[#D8FCF7]" : ""}`}>
      <img src={patient.image} alt={patient.name} className="w-12 h-12 rounded-full" />
      <div className="ml-3">
        <p className="text-lg font-semibold">{patient.name}</p>
        <p className="text-sm text-gray-500">{patient.gender}, {patient.age} </p>
      </div>
      <img 
      src={MoreHorizIcon} 
      alt="More options" 
      className="w-[18px] h-[4px] absolute left-[337px] opacity-100 cursor-pointer"
    />
    </div>
  );
  
  const PatientsList = () => (
    <aside className="bg-white p-4 shadow-lg rounded-xl absolute top-[122px] left-[18px] w-[367px] h-[1054px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold font-manrope">Patients</h2>
        <img src={SearchIcon} alt="Search" className="w-6 h-6 cursor-pointer" /> {/* Correct Search Icon */}
      </div>
  
      <div className="space-y-3 overflow-auto h-[90%]">
        {patients.map((patient, index) => (
          <PatientCard key={index} patient={patient} />
        ))}
      </div>
    </aside>
  );
  
  export default PatientsList;