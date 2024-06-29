'use client';
import React from "react";
import Link from "next/link";
import PetMedicalCampRegistrationForm from "../components/CampRegister";
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Spotlight and Emergency Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Spotlight</h2>
          <p className="text-gray-600">
            Here is some important information or spotlight content about pet blood donation.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency Contact</h2>
          <p className="text-gray-600">
            Contact your local rescue center for immediate assistance.
          </p>
          <div className="mt-4 text-gray-600">
            Other emergency contacts:
            <ul className="list-disc list-inside">
              <li>Rescue Center: 123-456-7890</li>
              <li>Emergency Vet: 098-765-4321</li>
              <li>Animal Control: 111-222-3333</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Link href="../dogdonor">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Dog blood donors </h2>
            <p className="text-gray-600">Look for Dogs Who Can Donate Blood</p>
          </div>
        </Link>
        <Link href="../vetclinics">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Look for Veterinary Clinics</h2>
            <p className="text-gray-600">Find veterinary clinics that support blood donation.</p>
          </div>
        </Link>
        <Link href="../rescuecenter">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Look for Rescue Centers</h2>
            <p className="text-gray-600">Find rescue centers near you.</p>
          </div>
        </Link>
      </div>

      {/* Collaborate with Us Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Collaborate with Us</h2>
        <p className="text-gray-600">
          Join us in making a difference. Register for any of the following:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-bold text-red-600 mb-4">Register as a Donor</h3>
            <p className="text-gray-600">Register your dog as a blood donor and help save lives.</p>
            {/* Add registration form or link here */}
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-bold text-red-600 mb-4">Register Veterinary Clinic</h3>
            <p className="text-gray-600">
              Register your veterinary clinic to collaborate with us.
            </p>
            {/* Add registration form or link here */}
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors">
            <h3 className="text-xl font-bold text-red-600 mb-4">Register for Camps and Medical Drives</h3>
            <p className="text-gray-600">
              Organize or participate in blood donation camps and medical drives for pets.
            </p>
            {/* Add registration form or link here */}
          </div>
        </div>
      </div>
      <PetMedicalCampRegistrationForm/>
    </div>
  );
};

export default Dashboard;