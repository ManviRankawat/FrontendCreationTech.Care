import React, { useState, useEffect, useRef } from 'react';
import BirthIcon from "../Assets/BirthIcon.svg";
import FemaleIconIcon from "../Assets/FemaleIcon.svg";
import MaleIcon from "../Assets/MaleIcon.svg";
import ContactIcon from "../Assets/PhoneIcon.svg";
import InsuranceIcon from "../Assets/InsuranceIcon.svg";

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={icon} alt={label} className="w-10 h-10" />
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-lg font-semibold">{value || 'N/A'}</p>
      </div>
    </div>
  );
};

const PatientBio = ({ patient, index }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (patient) {
      setLoading(true);
      setError(null);
      fetch(`https://fedskillstest.coalitiontechnologies.workers.dev/`, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('coalition:skills-test'),
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(data => {
          setLoading(false);
          // Handle fetched data
        })
        .catch(() => {
          setError('Failed to load patient data');
          setLoading(false);
        });
    }
  }, [patient]);

  const handleShowAllInformation = () => {
    // Show all information (possibly in a modal or a new view)
    console.log(patient);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <aside className="w-1/4 bg-white p-4 shadow-lg absolute top-[108px] left-[1216px] w-[367px] h-[740px] rounded-lg opacity-1">
      <img src={patient?.profile_picture} alt="Profile" className="w-[200px] h-[200px] rounded-full mx-auto" />
      <div className="relative">
        <h2 className="text-center text-2xl font-extrabold font-manrope absolute top-[30px] w-full">
          {patient?.name || 'Patient Name'}
        </h2>
      </div>
      <div className="space-y-3 font-manrope absolute top-[312px] p-3">
        <InfoItem icon={BirthIcon} label="Date of Birth" value={patient?.date_of_birth} />
        <InfoItem icon={patient?.gender === 'Male' ? MaleIcon : FemaleIconIcon} label="Gender" value={patient?.gender} />
        <InfoItem icon={ContactIcon} label="Contact Info." value={patient?.phone_number} />
        <InfoItem icon={ContactIcon} label="Emergency Contacts" value={patient?.emergency_contact} />
        <InfoItem icon={InsuranceIcon} label="Insurance Provider" value={patient?.insurance_type} />
      </div>

      <div className="mt-4 flex justify-center">
        <button
          style={{
            position: 'absolute',
            top: '655px',
            left: '80px',
            width: '220px',
            height: '41px',
            background: '#01F0D0',
            borderRadius: '41px',
          }}
          className="text-black"
          onClick={handleShowAllInformation}
        >
          Show All Information
        </button>
      </div>

    </aside>
  );
};

export default PatientBio;
