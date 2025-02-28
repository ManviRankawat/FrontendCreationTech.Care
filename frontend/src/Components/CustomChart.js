import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Expand from '/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/expand_more.svg';
import ArrowUp from '/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/ArrowUp.svg';
import ArrowDown from '/Users/manvirankawat/Documents/CoalitionTechFrontend/frontend/src/Assets/ArrowDown.svg';

const BloodPressureChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;
        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
                datasets: [
                    {
                        label: 'Systolic',
                        data: [120, 110, 160, 105, 149, 160],
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
                        data: [96, 60, 100, 91, 72, 78],
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
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: {
                        grid: { display: false },
                    },
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(200, 200, 200, 0.2)' },
                    },
                },
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="bg-[#F5E6F7] p-4 rounded-lg w-[715px] h-[298px] flex">
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                <h2 className="text-[18px] font-bold font-manrope">Blood Pressure</h2>
                    <p className="text-sm text-gray-600">Last 6 months </p>
                    <img src={Expand} alt="Expand" />
                </div>
                <div className="w-full h-[85%]">
                    <canvas ref={chartRef} />
                </div>
            </div>
            {/* Right Section - Systolic & Diastolic */}
            <div className="flex flex-col justify-center space-y-4 ml-4">
                {/* Systolic Section */}
                <div className="w-[149px] h-[84px] p-3 ">
                    <p className="text-[#E66FD2] text-sm font-bold">Systolic</p>
                    <p className="text-2xl font-bold text-gray-900">160</p>
                    <img src={ArrowUp} alt="ArrowUp" />
                    <p className="text-xs text-gray-500"> Higher than Average</p>
                </div>

                {/* Diastolic Section */}
                <div className="w-[149px] h-[84px]  p-3">
                    <p className="text-[#8C6FE6] text-sm font-bold">Diastolic</p>
                    <p className="text-2xl font-bold text-gray-900">78</p>
                    <img src={ArrowDown} alt="ArrowDown" />
                    <p className="text-xs text-gray-500"> Lower than Average</p>
                </div>
            </div>
        </div>
    );
};

export default BloodPressureChart;
