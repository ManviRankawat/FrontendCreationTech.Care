import React from "react";
import DownloadIcon from "./Assets/download.png";
import Patients from "./Components/Patients";
import PatientBio from "./Components/PatientBio";
import DiagnosticList from "./Components/DiagnosticList";



const Dashboard = ({ patient }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Patient List */}
      <Patients />

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {/* Diagnosis History */}
        <div
          className="bg-white p-6 shadow-lg rounded-xl absolute"
          style={{
            top: "122px",
            left: "417px",
            width: "766px",
            height: "673px",
          }}
        >
          <h3 className="text-2xl font-semibold font-manrope pb-9">Diagnosis History</h3>
        </div>

        {/* Diagnostic List */}
        <DiagnosticList />
      </main>

      {/* Right Sidebar - Patient Info */}
      <PatientBio />

      {/* Lab Results */}
      <div
        className="absolute bg-white rounded-2xl shadow-lg p-4"
        style={{
          top: "880px",
          left: "1215px",
          width: "367px",
          height: "296px",
        }}
      >
        <h3 className="text-xl font-semibold font-manrope pb-4">Lab Results</h3>

        <div className="space-y-3 overflow-y-auto pr-4" style={{ maxHeight: "220px" }}>
          {["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays", "Urine Test"].map((test, index) => (
            <div key={index} className="flex justify-between items-center p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-700">{test}</p>
              <button className="text-blue-600 flex items-center">
                <img src={DownloadIcon} alt="Download" className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
