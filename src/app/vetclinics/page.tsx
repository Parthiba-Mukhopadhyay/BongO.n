'use client';
import React, { useState, useEffect } from 'react';

interface BloodBank {
  name: string;
  location: string;
  contact: string;
  phoneNumber: string;
  email: string;
  website: string;
}

const predefinedBloodBanks: BloodBank[] = [
  { name: 'Central Blood Bank', location: 'New York', contact: '123-456-7890', phoneNumber: '123-456-7890', email: 'central@example.com', website: 'http://www.centralbloodbank.com' },
  // Add more blood banks with the new fields
];

const Vetclinics: React.FC = () => {
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>(predefinedBloodBanks);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredBloodBanks, setFilteredBloodBanks] = useState<BloodBank[]>(predefinedBloodBanks);

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
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <section className=" text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Blood Bank Directory</h1>
          <p className="mt-2 text-gray-500">
            Find the nearest blood banks and check their contact information.
          </p>
        </section>

        <section className=" text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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
              <option value="">Sort by...</option>
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
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Location</th>
                <th className="px-4 py-2 border">Contact</th>
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
                  <td className="px-4 py-2 border">{bloodBank.contact}</td>
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
