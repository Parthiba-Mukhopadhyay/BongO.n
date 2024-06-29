'use client';
import React, { useState, useEffect } from 'react';

interface RescueCenter {
  centerName: string;
  city: string;
  operatingHours: string;
  contact: string;
  email: string;
  website: string;
}

const predefinedRescueCenters: RescueCenter[] = [
  {
    centerName: 'City Rescue Center',
    city: 'New York',
    operatingHours: '24/7',
    contact: '123-456-7890',
    email: 'cityrescue@example.com',
    website: 'http://www.cityrescuecenter.com',
  },
  {
    centerName: 'Quick Response Rescue',
    city: 'Los Angeles',
    operatingHours: '9 AM - 5 PM',
    contact: '234-567-8901',
    email: 'quickresponse@example.com',
    website: 'http://www.quickrescue.com',
  },
  // Add more predefined rescue centers as needed
];

const Rescuecenter: React.FC = () => {
  const [rescueCenters, setRescueCenters] = useState<RescueCenter[]>(predefinedRescueCenters);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredRescueCenters, setFilteredRescueCenters] = useState<RescueCenter[]>(predefinedRescueCenters);

  useEffect(() => {
    let sortedRescueCenters = [...rescueCenters];

    if (sortOption === 'city') {
      sortedRescueCenters.sort((a, b) => a.city.localeCompare(b.city));
    }

    setFilteredRescueCenters(
      sortedRescueCenters.filter(center =>
        center.centerName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [rescueCenters, searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <section className=" text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Rescue Centers Directory</h1>
          <p className="mt-2 text-gray-500">
            Find the nearest rescue centers and check their information.
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
              <option value="city">City</option>
            </select>
            <button
              onClick={() => setFilteredRescueCenters(filteredRescueCenters)}
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
                <th className="px-4 py-2 border">Center Name</th>
                <th className="px-4 py-2 border">City</th>
                <th className="px-4 py-2 border">Operating Hours</th>
                <th className="px-4 py-2 border">Contact</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredRescueCenters.slice(0, 10).map((center, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{center.centerName}</td>
                  <td className="px-4 py-2 border">{center.city}</td>
                  <td className="px-4 py-2 border">{center.operatingHours}</td>
                  <td className="px-4 py-2 border">{center.contact}</td>
                  <td className="px-4 py-2 border">{center.email}</td>
                  <td className="px-4 py-2 border">{center.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Rescuecenter;
