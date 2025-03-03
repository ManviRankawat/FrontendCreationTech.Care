import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Expand from '../Assets/expand_more.svg';
import ArrowUp from '../Assets/ArrowUp.svg';
import ArrowDown from '../Assets/ArrowDown.svg';
import RespiratoryRate from '../Assets/respiratory_rate.svg';
import Temperature from '../Assets/temperature.svg';
import HeartBPM from '../Assets/HeartBPM.svg';

const StatCard = ({ icon, label, value, unit, bgColor }) => (
  <div className={`p-4 ${bgColor} rounded-lg flex flex-col items-center`}>
    <img src={icon} alt={label} className="w-20 h-20" />
    <p className="text-lg font-medium">{label}</p>
    <p className="text-xl font-bold">{value} {unit}</p>
  </div>
);

const BloodPressureChart = ({ patient }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    // Access the diagnosis history and get the last 6 months
    const diagnosisHistory = patient?.diagnosis_history || [];
    const lastSixMonths = diagnosisHistory.slice(-6); // Get the last 6 months

    // Extract the month values and the corresponding blood pressure values
    const months = lastSixMonths.map(item => item.month); // assuming `month` is in the `diagnosis_history`
    const systolicValues = lastSixMonths.map(item => item.blood_pressure?.systolic?.value || 0);
    const diastolicValues = lastSixMonths.map(item => item.blood_pressure?.diastolic?.value || 0);

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Systolic',
            data: systolicValues,
            borderColor: '#E66FD2',
            backgroundColor: '#E66FD2',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: '#E66FD2',
            fill: false,
          },
          {
            label: 'Diastolic',
            data: diastolicValues,
            borderColor: '#8C6FE6',
            backgroundColor: '#8C6FE6',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: '#8C6FE6',
            fill: false,
          },
        ],
      },
    });
  }, [patient]);

  return (
    <div className="bg-[#F4F0FE] p-4 rounded-lg absolute top-[215px] left-[440px] w-[715px] h-[298px] flex">
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[18px] font-bold font-manrope">Blood Pressure</h2>
          <p className="text-sm text-gray-600 absolute left-[420px]">Last 6 months</p>
          <img src={Expand} alt="Expand" />
        </div>
        <div className="w-full h-[85%]">
          <canvas ref={chartRef} />
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4 ml-4">
        {/* Systolic */}
        <div className="w-[149px] h-[84px] p-3">
          <p className="text-[#E66FD2] text-sm font-bold">Systolic</p>
          <p className="text-2xl font-bold text-gray-900">
            {patient?.diagnosis_history[0].blood_pressure?.systolic?.value || '--'}
          </p>
          <img src={ArrowUp} alt="ArrowUp" />
          <p className="text-xs text-gray-500">{patient?.diagnosis_history[0].systolic?.levels || 'N/A'}</p>
        </div>
        {/* Diastolic */}
        <div className="w-[149px] h-[84px] p-3">
          <p className="text-[#8C6FE6] text-sm font-bold">Diastolic</p>
          <p className="text-2xl font-bold text-gray-900">
            {patient?.diagnosis_history[0].blood_pressure?.diastolic?.value || '--'}
          </p>
          <img src={ArrowDown} alt="ArrowDown" />
          <p className="text-xs text-gray-500">{patient?.diagnosis_history[0].diastolic?.levels || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

const CustomChart = ({ patient, index }) => {
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
    <>
      {/* Blood Pressure Chart */}
      <BloodPressureChart patient={patient} />

      {/* Stat Cards */}
      <div className="absolute top-[535px] left-[436px]">
        <StatCard icon={RespiratoryRate} label="Respiratory Rate" value={patient?.diagnosis_history[0]?.respiratory_rate.value} unit="bpm" bgColor="bg-blue-100 w-[228px] h-[242px]" />
      </div>
      <div className="absolute top-[535px] left-[685px]">
        <StatCard icon={Temperature} label="Temperature" value={patient?.diagnosis_history[0]?.temperature.value} unit="°F" bgColor="bg-red-100 w-[228px] h-[242px]" />
      </div>
      <div className="absolute top-[535px] left-[933px]">
        <StatCard icon={HeartBPM} label="Heart Rate" value={patient?.diagnosis_history[0]?.heart_rate.value} unit="bpm" bgColor="bg-pink-100 w-[228px] h-[242px]" />
      </div>
    </>
  );
};

export default CustomChart;
