'use client';
import React, { useState } from "react";
import Link from "next/link";
import UserRegistrationForm from "../components/UserRegistrationForm";

const Dashboard: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

      {/* Services Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="../dogdonor">
            <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Dog blood donors</h2>
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
      </div>

      {/* Collaborate with Us Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Collaborate with Us</h2>
        <p className="text-gray-600">
          Join us in making a difference. Register for any of the following:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={openModal}>
            <h3 className="text-xl font-bold text-red-600 mb-4">Register as a Donor</h3>
            <p className="text-gray-600">Register your dog as a blood donor and help save lives.</p>
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

      {/* Modal for ExtendedEmailSubscriptionForm */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <UserRegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
