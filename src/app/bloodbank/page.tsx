'use client';
import React, { useState, useEffect } from 'react';

interface BloodBank {
  name: string;
  location: string;
  inventory: {
    'A+': number;
    'A-': number;
    'B+': number;
    'B-': number;
    'AB+': number;
    'AB-': number;
    'O+': number;
    'O-': number;
  };
  contact: string;
}

const predefinedBloodBanks: BloodBank[] = [
  { name: 'Central Blood Bank', location: 'New York', inventory: { 'A+': 10, 'A-': 5, 'B+': 8, 'B-': 4, 'AB+': 6, 'AB-': 2, 'O+': 12, 'O-': 3 }, contact: '123-456-7890' },
  { name: 'City Blood Bank', location: 'Los Angeles', inventory: { 'A+': 7, 'A-': 3, 'B+': 6, 'B-': 2, 'AB+': 5, 'AB-': 1, 'O+': 9, 'O-': 4 }, contact: '234-567-8901' },
  { name: 'State Blood Bank', location: 'Chicago', inventory: { 'A+': 9, 'A-': 4, 'B+': 7, 'B-': 3, 'AB+': 8, 'AB-': 2, 'O+': 10, 'O-': 5 }, contact: '345-678-9012' },
  { name: 'Metro Blood Bank', location: 'Houston', inventory: { 'A+': 6, 'A-': 2, 'B+': 5, 'B-': 1, 'AB+': 4, 'AB-': 1, 'O+': 8, 'O-': 3 }, contact: '456-789-0123' },
  { name: 'Regional Blood Bank', location: 'Phoenix', inventory: { 'A+': 11, 'A-': 5, 'B+': 9, 'B-': 4, 'AB+': 7, 'AB-': 2, 'O+': 13, 'O-': 6 }, contact: '567-890-1234' },
  { name: 'Community Blood Bank', location: 'Philadelphia', inventory: { 'A+': 8, 'A-': 3, 'B+': 6, 'B-': 2, 'AB+': 5, 'AB-': 1, 'O+': 10, 'O-': 4 }, contact: '678-901-2345' },
  { name: 'Health Blood Bank', location: 'San Antonio', inventory: { 'A+': 12, 'A-': 6, 'B+': 10, 'B-': 5, 'AB+': 8, 'AB-': 3, 'O+': 14, 'O-': 7 }, contact: '789-012-3456' },
  { name: 'Lifesaver Blood Bank', location: 'San Diego', inventory: { 'A+': 9, 'A-': 4, 'B+': 7, 'B-': 3, 'AB+': 6, 'AB-': 2, 'O+': 11, 'O-': 5 }, contact: '890-123-4567' },
  { name: 'Unity Blood Bank', location: 'Dallas', inventory: { 'A+': 8, 'A-': 3, 'B+': 5, 'B-': 2, 'AB+': 4, 'AB-': 1, 'O+': 9, 'O-': 3 }, contact: '901-234-5678' },
  { name: 'Hope Blood Bank', location: 'San Jose', inventory: { 'A+': 10, 'A-': 5, 'B+': 8, 'B-': 4, 'AB+': 6, 'AB-': 2, 'O+': 12, 'O-': 3 }, contact: '012-345-6789' },
];

const Bloodbank: React.FC = () => {
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>(predefinedBloodBanks);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredBloodBanks, setFilteredBloodBanks] = useState<BloodBank[]>(predefinedBloodBanks);

  // useEffect(() => {
  //   // Fetch blood bank data from the database
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/bloodbanks'); // Replace with your API endpoint
  //       setBloodBanks(response.data);
  //     } catch (error) {
  //       console.error('Error fetching blood bank data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
        <section className="bg-white text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Blood Bank Directory</h1>
          <p className="mt-2 text-gray-700">
            Find the nearest blood banks and check their available inventory.
          </p>
        </section>

        <section className="bg-white text-gray-900 p-6 rounded-lg shadow-lg mb-6">
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

        <section className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Location</th>
                <th className="px-4 py-2 border">A+</th>
                <th className="px-4 py-2 border">A-</th>
                <th className="px-4 py-2 border">B+</th>
                <th className="px-4 py-2 border">B-</th>
                <th className="px-4 py-2 border">AB+</th>
                <th className="px-4 py-2 border">AB-</th>
                <th className="px-4 py-2 border">O+</th>
                <th className="px-4 py-2 border">O-</th>
                <th className="px-4 py-2 border">Contact</th>
              </tr>
            </thead>
            <tbody>
              {filteredBloodBanks.slice(0, 10).map((bloodBank, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{bloodBank.name}</td>
                  <td className="px-4 py-2 border">{bloodBank.location}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['A+']}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['A-']}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['B+']}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['B-']}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['AB+']}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['AB-']}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['O+']}</td>
                  <td className="px-4 py-2 border">{bloodBank.inventory['O-']}</td>
                  <td className="px-4 py-2 border">{bloodBank.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Bloodbank;
