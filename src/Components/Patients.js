import React, { useState, useEffect } from "react";
import SearchIcon from "../Assets/search.svg";
import MoreHorizIcon from "../Assets/more_horiz.svg";
import PatientBio from "./PatientBio";
import CustomChart from "./CustomChart";
import DiagnosticList from "./DiagnosticList";

// Helper function to check if an image URL is valid
const isValidImage = (index) => {
  const patientId = index + 1;  // Start patientId from 1 and increment
  return `https://fedskillstest.ct.digital/${patientId}.png`;
};

const PatientCard = ({ patient, onSelect, isSelected, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center p-3 cursor-pointer rounded-lg transition-colors duration-200
        ${isSelected || isHovered ? "bg-[#D8FCF7]" : "bg-transparent"}`}
      onClick={() => onSelect(patient)}  // Ensure onSelect is passed correctly
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isValidImage(index)}  // Use the index to generate patientId starting from 1
        alt={patient.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-3 flex-1">
        <p className="text-lg font-semibold">{patient.name}</p>
        <p className="text-sm text-gray-500">
          {patient.gender}, {patient.age}
        </p>
      </div>
      <img
        src={MoreHorizIcon}
        alt="More options"
        className="w-[18px] h-[4px] opacity-100 cursor-pointer ml-auto"
      />
    </div>
  );
};

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null); // Track selected patient

  // Fetch patients data from the API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa("coalition:skills-test"),
          },
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setPatients(data);
        setFilteredPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient); // Set the selected patient
  };

  return (
    <div className="flex">
      <aside className="bg-white p-2 shadow-lg rounded-xl absolute top-[122px] left-[18px] w-[367px] h-[1054px]">
        <div className="flex items-center justify-between mb-4 px-3 pb-4">
          <h2 className="text-2xl font-semibold font-manrope pt-3 pb-4">Patients</h2>
          <button className="p-2 rounded-lg">
            <img src={SearchIcon} alt="Search" className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Patient List with Custom Scrollbar */}
        <div className="relative max-h-[900px] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
          <div className="space-y-3">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <PatientCard
                  key={patient.name}
                  patient={patient}
                  onSelect={handleSelectPatient}  // Pass the select function here
                  isSelected={selectedPatient?.name === patient.name}
                  index={index}  // Pass the index to generate patientId starting from 1
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No patients found.</p>
            )}
          </div>
        </div>
      </aside>

      {/* Display the PatientBio and CustomChart when a patient is selected */}
      {selectedPatient && (
        <div>
          <PatientBio patient={selectedPatient} />
          <CustomChart patient={selectedPatient} />
          <DiagnosticList patient={selectedPatient} />
      </div>
      )}
    </div>
  );
};

export default PatientsList;
