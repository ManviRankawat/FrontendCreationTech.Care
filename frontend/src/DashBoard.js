import React from "react";
import JessicaProfilePic from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/Layer 2@2x.png";
import HeartBPM from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/HeartBPM.svg";
import RespiratoryRate from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/respiratory rate.svg";
import Temperature from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/temperature.svg";
import BirthIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/BirthIcon.svg";
import GenderIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/FemaleIcon.svg";
import ContactIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/PhoneIcon.svg";
import InsuranceIcon from "/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/InsuranceIcon.svg";


import CustomChart from "./Components/CustomChart";
import Patients from "./Components/Patients";

// Component for displaying patient stats
const StatCard = ({ icon, label, value, bgColor }) => (
  <div className={`p-4 ${bgColor} rounded-lg flex flex-col items-center`}>
    <img src={icon} alt={label} className="w-20 h-20" />
    <p className="text-lg font-medium">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

// Component for displaying patient info
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <img src={icon} alt={label} className="w-[42px] h-[42px]" /> {/* Corrected size */}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-medium">{value}</p>
    </div>
  </div>
);


const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Patient List */}
      <Patients />

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {/* Diagnosis History */}
        <div
          className="bg-white p-6 shadow-lg rounded-xl"
          style={{
            position: "absolute",
            top: "122px",
            left: "417px",
            width: "766px",
            height: "673px",
            borderRadius: "16px",
            opacity: "1",
          }}
        >
          <h3 className="text-2xl font-semibold font-manrope pb-10">Diagnosis History</h3>
          <div>
            <CustomChart />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <StatCard icon={RespiratoryRate} label="Respiratory Rate" value="20 bpm" bgColor="bg-blue-100 w-[228px] h-[242px]" />
            <StatCard icon={Temperature} label="Temperature" value="98.6°F" bgColor="bg-red-100 w-[228px] h-[242px]" />
            <StatCard icon={HeartBPM} label="Heart Rate" value="78 bpm" bgColor="bg-pink-100 w-[228px] h-[242px]" />
          </div>
        </div>

        {/* Diagnostic List */}
        <div
          className="bg-white p-6 shadow-lg rounded-lg mt-6"
          style={{
            position: "absolute",
            top: "805px",
            left: "417px",
            width: "766px",
            height: "349px",
            borderRadius: "16px",
            opacity: "1",
          }}
        >
          <h3 className="text-2xl font-semibold font-manrope">Diagnostic List</h3>
          <ul className="mt-4">
            <li className="p-2 border-b">Hypertension - Under Observation</li>
            <li className="p-2 border-b">Type 2 Diabetes - Cured</li>
            <li className="p-2">Asthma - Inactive</li>
          </ul>
        </div>
      </main>

      {/* Right Sidebar - Patient Info */}
      <aside
        className="w-1/4 bg-white p-4 shadow-lg"
        style={{
          position: "absolute",
          top: "108px",
          left: "1216px",
          width: "367px",
          height: "740px",
          borderRadius: "16px",
          opacity: "1",
        }}
      >
        <img
          src={JessicaProfilePic}
          alt="Jessica Taylor"
          className="w-[200px] h-[200px] rounded-full mx-auto"
        />
        <div className="relative">
          <h2 className="text-center text-2xl font-extrabold font-manrope absolute top-[30px] w-full">
            Jessica Taylor
          </h2>
        </div>
        <div className="space-y-3 font-manpole absolute top-[312px] ">
          <InfoItem icon={BirthIcon} label="Date of Birth" value="August 23, 1996" />
          <InfoItem icon={GenderIcon} label="Gender" value="Female" />
          <InfoItem icon={ContactIcon} label="Contact Info." value="(415) 555-1234" />
          <InfoItem icon={ContactIcon} label="Emergency Contacts" value="(415) 555-5678" />
          <InfoItem icon={InsuranceIcon} label="Insurance Provider" value="Sunrise Health Insurance" />
        </div>
         {/* Show all Information Button */}
         <div className="mt-4 flex justify-center">
         <button
        style={{
            position: "absolute",
            top: "655px",  
            left: "80px",
            width: "220px",
            height: "41px",
            background: "#01F0D0",
            borderRadius: "41px",
            opacity: "1",
        }}
        className="text-black"
        >
            Show All Information
        </button>
        </div>
      </aside>

      <div 
        className="absolute bg-white rounded-2xl shadow-lg p-4"
        style={{ 
            top: "880px", 
            left: "1215px", 
            width: "367px", 
            height: "296px" 
          
        }}
    >
        <h3 className="text-xl font-semibold font-manrope pb-4">Lab Results</h3>
        <div className="space-y-3">
          
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Blood Tests</p>
                <p className="text-sm font-bold text-blue-600">95 mg/dL</p>
            </div>

            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">CT Scans</p>
                <p className="text-sm font-bold text-red-500">210 mg/dL</p>
            </div>

            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Radiology Reports</p>
                <p className="text-sm font-bold text-green-500">13.5 g/dL</p>
            </div>

            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">X-Rays</p>
                <p className="text-sm font-bold text-green-500">13.5 g/dL</p>
            </div>

            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Urine Test</p>
                <p className="text-sm font-bold text-green-500">13.5 g/dL</p>
            </div>

            
        </div>
    </div>

    </div>

    
    
  );
};

export default Dashboard;
