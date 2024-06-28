import React from "react";
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Spotlight Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Spotlight</h2>
          <p className="text-gray-600">
            Here is some important information or spotlight content.
          </p>
        </div>

        {/* Emergency Contact Section */}
        <div className="md:col-span-1 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency Contact</h2>
          <p className="text-gray-600">
            Call 911 or your local emergency number for immediate assistance.
          </p>
          <div className="mt-4 text-gray-600">
            Other emergency contacts:
            <ul className="list-disc list-inside">
              <li>Ambulance: 123-456-7890</li>
              <li>Police: 098-765-4321</li>
              <li>Fire: 111-222-3333</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Look for Blood Donors Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Look for Blood Donors</h2>
          <p className="text-gray-600">Find blood donors in your area.</p>
        </div>

        {/* Look for Blood Camps Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Look for Blood Camps</h2>
          <p className="text-gray-600">Find upcoming blood donation camps.</p>
        </div>

        {/* Look for Ambulance and Oxygen Services Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Look for Ambulance & Oxygen Services
          </h2>
          <p className="text-gray-600">
            Find ambulance and oxygen services near you.
          </p>
        </div>
      </div>

      {/* Collaborate with Us Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Collaborate with Us</h2>
        <p className="text-gray-600">
          Join us in making a difference. Register for any of the following:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Register as a Blood Donor */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">Register as a Blood Donor</h3>
            <p className="text-gray-600">Become a blood donor and save lives.</p>
            {/* Add registration form or link here */}
          </div>

          {/* Register Blood Bank */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">Register Blood Bank</h3>
            <p className="text-gray-600">
              Register your blood bank to collaborate with us.
            </p>
            {/* Add registration form or link here */}
          </div>

          {/* Register Ambulance and O2 Service */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Register Ambulance & O2 Service
            </h3>
            <p className="text-gray-600">
              Provide ambulance and oxygen services in emergencies.
            </p>
            {/* Add registration form or link here */}
          </div>

          {/* Register Events (Blood Donation Camps and Drives) */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">Register Events</h3>
            <p className="text-gray-600">
              Organize blood donation camps and drives.
            </p>
            {/* Add registration form or link here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
