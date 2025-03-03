import React from "react";

const DoctorProfile = ({ doctorImage, settingsIcon, moreIcon }) => {
    return (
        <div className="flex items-center bg-white p-3 w-fit">
            {/* Doctor's Image */}
            <img
                src={doctorImage}
                alt="Doctor"
                className="w-10 h-10 rounded-full object-cover"
            />

            {/* Doctor's Info */}
            <div className="ml-3">
                <p className="text-sm font-bold text-gray-900 font-manrope">
                    Dr. Jose Simmons
                </p>
                <p className="text-xs text-gray-500 font-manrope">
                    General Practitioner
                </p>
            </div>

            {/* Icons */}
            <div className="flex items-center ml-3 space-x-3">
                <img src={settingsIcon} alt="Settings" className="w-5 h-5 cursor-pointer" />
                <img src={moreIcon} alt="More" className=" cursor-pointer" />
            </div>
        </div>
    );
};

export default DoctorProfile;
