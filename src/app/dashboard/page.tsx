'use client';
import React, { useState,useEffect } from "react";
import Link from "next/link";
import UserRegistrationForm from "../components/UserRegistrationForm";
import CampRegister from  "../components/CampRegister"
import VetRegister from  "../components/VetRegister"

interface CampData {
  campName: string;
  location: string;
  city: string;
  state: string;
  zipCode: string;
  contactNumber: string;
  email: string;
  website: string;
  servicesProvided: string;
  eventDates: string;
}

const Dashboard: React.FC = () => {
  const [isModalDonorOpen, setModalDonorOpen] = useState(false);

  const openModalDonor = () => {
    setModalDonorOpen(true);
  };

  const closeModalDonor = () => {
    setModalDonorOpen(false);
  };

  const [isModalClinicOpen, setModalClinicOpen] = useState(false);

  const openModalClinic = () => {
    setModalClinicOpen(true);
  };

  const closeModalClinic = () => {
    setModalClinicOpen(false);
  };

  const [isModalMedicalOpen, setModalMedicalOpen] = useState(false);

  const openModalMedical = () => {
    setModalMedicalOpen(true);
  };

  const closeModalMedical = () => {
    setModalMedicalOpen(false);
    fetchCamps();
  };

  const [isModalRescueOpen, setModalRescueOpen] = useState(false);

  const openModalRescue = () => {
    setModalRescueOpen(true);
  };

  const closeModalRescue = () => {
    setModalRescueOpen(false);
  };

  const [camps, setCamps] = useState<CampData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCamps = async () => {
    try {
      const response = await fetch('/api/view-camps');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: CampData[] = await response.json();
      setCamps(data);
    } catch (error) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCamps();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Spotlight and Emergency Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent from-red-700 via-blue-500 to-yellow-500 animate-text">Spotlight</h2>
          <ul className="text-blue-600 cursor-pointer list-disc text-xl">
            {camps.slice(0,4).map((camp) => (
              <li key={camp.campName}>
                <a href={camp.website} target="_blank" rel="noopener noreferrer">
                  {camp.campName} camp is going on at {camp.location} on {camp.eventDates}
                </a>
              </li>
            ))||<li>No Camps Found</li>}
          </ul>
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
            <div className="bg-[#ededed] p-6 shadow-2xl shadow-slate-600 rounded-lg hover:shadow-xl hover:shadow-slate-600 hover:bg-white transition-all duration-300">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Dog blood donors</h2>
              <p className="text-gray-600">Look for Dogs Who Can Donate Blood</p>
            </div>
          </Link>
          <Link href="../vetclinics">
            <div className="bg-[#ededed] p-6 shadow-2xl shadow-slate-600 rounded-lg hover:shadow-xl hover:shadow-slate-600 hover:bg-white transition-all duration-300">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Look for Veterinary Clinics</h2>
              <p className="text-gray-600">Find veterinary clinics that support blood donation.</p>
            </div>
          </Link>
          <Link href="../rescuecenter">
            <div className="bg-[#ededed] p-6 shadow-2xl shadow-slate-600 rounded-lg hover:shadow-xl hover:shadow-slate-600 hover:bg-white transition-all duration-300">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Look for Rescue Centers</h2>
              <p className="text-gray-600">Find rescue centers near you.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Collaborate with Us Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Collaborate with Us</h2>
        <p className="text-gray-100">
          Join us in making a difference. Register for any of the following:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <div className="bg-[#ededed] p-6 shadow-2xl shadow-slate-600 rounded-lg hover:shadow-xl hover:shadow-slate-600 hover:bg-white transition-all duration-300 cursor-pointer" onClick={openModalDonor}>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Register as a Donor</h3>
            <p className="text-gray-700">Register your dog as a blood donor and help save lives.</p>
          </div>
          <div className="bg-[#ededed] p-6 shadow-2xl shadow-slate-600 rounded-lg hover:shadow-xl hover:shadow-slate-600 hover:bg-white transition-all duration-300 cursor-pointer" onClick={openModalClinic}>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Register Veterinary Clinic</h3>
            <p className="text-gray-700">
              Register your veterinary clinic to collaborate with us.
            </p>
            {/* Add registration form or link here */}
          </div>
          <div className="bg-[#ededed] p-6 shadow-2xl shadow-slate-600 rounded-lg hover:shadow-xl hover:shadow-slate-600 hover:bg-white transition-all duration-300 cursor-pointer" onClick={openModalMedical}>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Register for Camps and Medical Drives</h3>
            <p className="text-gray-700">
              Organize or participate in blood donation camps and medical drives for pets.
            </p>
            {/* Add registration form or link here */}
          </div>
          <div className="bg-[#ededed] p-6 shadow-2xl shadow-slate-600 rounded-lg hover:shadow-xl hover:shadow-slate-600 hover:bg-white transition-all duration-300 cursor-pointer" onClick={openModalRescue}>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Register for Rescue Center</h3>
            <p className="text-gray-700">
              Join our site to let people know about your rescue center.
            </p>
            {/* Add registration form or link here */}
          </div>
        </div>
      </div>

      {/* Modal for ExtendedEmailSubscriptionForm */}
      {isModalDonorOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#ffffffcc] p-6 rounded-lg shadow-lg max-w-lg w-full relative bg-opacity-90 backdrop-filter backdrop-blur-sm border-gray-600 border-2">
            <button
              className="absolute top-2 right-2 text-gray-600 text-4xl pr-2"
              onClick={closeModalDonor}
            >
              &times;
            </button>
            <UserRegistrationForm />
          </div>
        </div>
      )}

      {/* Modal for ExtendedEmailSubscriptionForm */}
      {isModalClinicOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#ffffffcc] p-6 rounded-lg shadow-lg max-w-lg w-full relative bg-opacity-90 backdrop-filter backdrop-blur-sm border-gray-600 border-2">
            <button
              className="absolute top-2 right-2 text-gray-600 text-4xl pr-2"
              onClick={closeModalClinic}
            >
              &times;
            </button>
            <VetRegister />
          </div>
        </div>
      )}

      {/* Modal for ExtendedEmailSubscriptionForm */}
      {isModalMedicalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#ffffffcc] p-6 rounded-lg shadow-lg max-w-lg w-full relative bg-opacity-90 backdrop-filter backdrop-blur-sm border-gray-600 border-2">
            <button
              className="absolute top-2 right-2 text-gray-600 text-4xl pr-2"
              onClick={closeModalMedical}
            >
              &times;
            </button>
            <CampRegister />
          </div>
        </div>
      )}

      {/* Modal for ExtendedEmailSubscriptionForm */}
      {isModalRescueOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#ffffffcc] p-6 rounded-lg shadow-lg max-w-lg w-full relative bg-opacity-90 backdrop-filter backdrop-blur-sm border-gray-600 border-2">
            <button
              className="absolute top-2 right-2 text-gray-600 text-4xl pr-2"
              onClick={closeModalRescue}
            >
              &times;
            </button>
            <CampRegister />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
