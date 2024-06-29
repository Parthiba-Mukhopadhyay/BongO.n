'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const dynamic = "force-dynamic";

interface BloodBank {
  name: string;
  location: string;
  phoneNumber: string;
  email: string;
  website: string;
}

const fetchBloodBank = async (): Promise<BloodBank[]> => {
  try {
    const response = await fetch('/api/vets', {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blood bank data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.map((item: any) => ({
      name: `${item.clinicName}`,
      location: item.city,
      email: item.email,
      phoneNumber: item.phoneNumber,
      website: item.website,
    }));
  } catch (error) {
    console.error('Error fetching blood bank data:', error);
    return [];
  }
};




const Vetclinics: React.FC = () => {
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredBloodBanks, setFilteredBloodBanks] = useState<BloodBank[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBloodBank();
      setBloodBanks(data);
      setFilteredBloodBanks(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedBloodBanks = [...bloodBanks];

    if (sortOption === 'location') {
      sortedBloodBanks.sort((a, b) => a.location.localeCompare(b.location));
    }

    setFilteredBloodBanks(
      sortedBloodBanks.filter(bloodBank =>
        bloodBank.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [bloodBanks, searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="w-full">
        <section className=" text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Veterinary Clinic Directory</h1>
          <p className="mt-2 text-gray-500">
            Find the nearest Veterinary Clinic and check their contact information.
          </p>
        </section>

        <section className=" text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-row md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 md:mb-0 md:mr-4 flex-grow"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 md:mb-0 md:mr-4"
            >
              <option value="">Search by...</option>
              <option value="location">Location</option>
            </select>
            <button
              onClick={() => setFilteredBloodBanks(filteredBloodBanks)}
              className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2"
            >
              Search
            </button>
          </div>
        </section>

        <section className=" text-gray-100 p-6 rounded-lg shadow-lg overflow-x-scroll no-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className='font-serif text-blue-300'>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Location</th>
                <th className="px-4 py-2 border">Phone Number</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredBloodBanks.slice(0, 10).map((bloodBank, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{bloodBank.name}</td>
                  <td className="px-4 py-2 border">{bloodBank.location}</td>
                  <td className="px-4 py-2 border">{bloodBank.phoneNumber}</td>
                  <td className="px-4 py-2 border">{bloodBank.email}</td>
                  <td className="px-4 py-2 border">{bloodBank.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Vetclinics;