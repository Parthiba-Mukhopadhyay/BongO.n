'use client';
import React, { useState, useEffect } from 'react';

interface Donor {
  name: string;
  bloodGroup: string;
  area: string;
  contact: string;
}

const predefinedDonors: Donor[] = [
  { name: 'John Doe', bloodGroup: 'A+', area: 'New York', contact: '123-456-7890' },
  { name: 'Jane Smith', bloodGroup: 'O-', area: 'Los Angeles', contact: '234-567-8901' },
  { name: 'Sam Brown', bloodGroup: 'B+', area: 'Chicago', contact: '345-678-9012' },
  { name: 'Lisa White', bloodGroup: 'AB-', area: 'Houston', contact: '456-789-0123' },
  { name: 'Paul Black', bloodGroup: 'A-', area: 'Phoenix', contact: '567-890-1234' },
  { name: 'Amy Green', bloodGroup: 'O+', area: 'Philadelphia', contact: '678-901-2345' },
  { name: 'Tom Blue', bloodGroup: 'B-', area: 'San Antonio', contact: '789-012-3456' },
  { name: 'Nina Red', bloodGroup: 'AB+', area: 'San Diego', contact: '890-123-4567' },
  { name: 'Jack Yellow', bloodGroup: 'A+', area: 'Dallas', contact: '901-234-5678' },
  { name: 'Emma Purple', bloodGroup: 'O-', area: 'San Jose', contact: '012-345-6789' },
];

const Dogdonor: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>(predefinedDonors);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>(predefinedDonors);

  // useEffect(() => {
  //   // Fetch donor data from the database
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/donors'); // Replace with your API endpoint
  //       setDonors(response.data);
  //     } catch (error) {
  //       console.error('Error fetching donor data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    let sortedDonors = [...donors];

    if (sortOption === 'bloodGroup') {
      sortedDonors.sort((a, b) => a.bloodGroup.localeCompare(b.bloodGroup));
    } else if (sortOption === 'area') {
      sortedDonors.sort((a, b) => a.area.localeCompare(b.area));
    }

    setFilteredDonors(
      sortedDonors.filter(donor =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [donors, searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <section className="bg-white text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Blood Donor Directory</h1>
          <p className="mt-2 text-gray-700">
            Thank you for considering to donate blood. Your contribution can save lives.
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
              <option value="bloodGroup">Blood Group</option>
              <option value="area">Area</option>
            </select>
            <button
              onClick={() => setFilteredDonors(filteredDonors)}
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
                <th className="px-4 py-2 border">Blood Group</th>
                <th className="px-4 py-2 border">Area</th>
                <th className="px-4 py-2 border">Contact</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonors.slice(0, 10).map((donor, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{donor.name}</td>
                  <td className="px-4 py-2 border">{donor.bloodGroup}</td>
                  <td className="px-4 py-2 border">{donor.area}</td>
                  <td className="px-4 py-2 border">{donor.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Dogdonor;
