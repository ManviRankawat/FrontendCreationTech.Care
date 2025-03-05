import React from "react";

const DiagnosticList = ({ patient }) => {
  return (
    <div className="absolute top-[827px] left-[417px] w-[766px] h-[349px] bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold font-manrope pb-4">Diagnostic List</h2>

      <div className="overflow-y-auto max-h-[250px] pr-4">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-2">Problem/Diagnosis</th>
              <th className="text-left p-2">Description</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {patient?.diagnostic_list?.length > 0 ? (
              patient.diagnostic_list.map((diagnostic, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{diagnostic.name}</td>
                  <td className="p-2">{diagnostic.description}</td>
                  <td className="p-2">{diagnostic.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No diagnostic data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
