'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface RescueCenter {
  centerName: string;
  city: string;
  operatingHours: string;
  contact: string;
  email: string;
  website: string;
}

// Function to fetch rescue centers from the API
const fetchRescueCenters = async (): Promise<RescueCenter[]> => {
  try {
    const response = await axios.get('/api/rescuecenters'); // Adjust the URL as necessary
    return response.data.map((item: any) => ({
      centerName: item.centerName,
      city: item.city,
      operatingHours: item.operatingHours,
      contact: item.contactNumber,
      email: item.email,
      website: item.website,
    }));
  } catch (error) {
    console.error('Error fetching rescue center data:', error);
    return [];
  }
};

const Rescuecenter: React.FC = () => {
  const [rescueCenters, setRescueCenters] = useState<RescueCenter[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredRescueCenters, setFilteredRescueCenters] = useState<RescueCenter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRescueCenters();
      setRescueCenters(data);
      setFilteredRescueCenters(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedRescueCenters = [...rescueCenters];

    if (sortOption === 'city') {
      sortedRescueCenters.sort((a, b) => a.city.localeCompare(b.city));
    }

    setFilteredRescueCenters(
      sortedRescueCenters.filter(center => {
        const searchLower = searchTerm.toLowerCase();
        if (sortOption === 'city') {
          return center.city.toLowerCase().includes(searchLower);
        } else {
          return center.centerName.toLowerCase().includes(searchLower);
        }
      })
    );
  }, [rescueCenters, searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="w-full">
        <section className="text-gray-900 p-6 rounded-lg shadow-lg mb-6 bg-opacity-50">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Rescue Centers Directory</h1>
          <p className="mt-2 text-gray-500">
            Find the nearest rescue centers and check their information.
          </p>
        </section>

        <section className="text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-row md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              placeholder={`Search by ${sortOption === 'city' ? 'city' : 'name'}...`}
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

        <section className="text-gray-100 p-6 rounded-lg shadow-lg overflow-x-scroll no-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className='font-serif text-blue-300'>
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
