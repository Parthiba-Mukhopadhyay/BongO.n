'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Donor {
  name: string;
  location: string;
  petType: string;
  petAge: string;
  petWeight: string;
  vaccinationStatus: string;
  recentIllness: string;
  medicalHistory6Months: string;
  petBloodType: string;
  mail: string;
  phone: string;
}

// Function to fetch donors from the API
const fetchDonors = async (): Promise<Donor[]> => {
  try {
    const response = await axios.get('/api/donors'); // Adjust the URL as necessary
    return response.data.map((item: any) => ({
      name: `${item.firstName} ${item.lastName}`,
      location: `${item.address}, ${item.city}, ${item.state}, ${item.pinCode}`,
      petType: item.petType,
      petAge: `${item.petAge} years`,
      petWeight: `${item.petWeight} kg`,
      vaccinationStatus: item.vaccinationStatus,
      recentIllness: item.recentIllness,
      medicalHistory6Months: item.medicalHistory6Months,
      petBloodType: item.petBloodType, // Assuming you need to handle petBloodType separately or add it to your API
      mail: item.email,
      phone: item.phoneNumber,
    }));
  } catch (error) {
    console.error('Error fetching donor data:', error);
    return [];
  }
};

const DogDonor: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDonors();
      setDonors(data);
      setFilteredDonors(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedDonors = [...donors];

    if (sortOption === 'location') {
      sortedDonors.sort((a, b) => a.location.localeCompare(b.location));
    } else if (sortOption === 'petBloodType') {
      sortedDonors.sort((a, b) => a.petBloodType.localeCompare(b.petBloodType));
    }

    setFilteredDonors(
      sortedDonors.filter(donor => {
        const searchLower = searchTerm.toLowerCase();
        if (sortOption === 'location') {
          return donor.location?.toLowerCase().includes(searchLower);
        } else if (sortOption === 'petBloodType') {
          return donor.petBloodType?.toLowerCase().includes(searchLower);
        } else {
          return donor.name?.toLowerCase().includes(searchLower);
        }
      })
    );
  }, [donors, searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-gray-900 p-6 rounded-lg shadow-lg mb-6 bg-opacity-50">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Animal Blood Donor Directory</h1>
        </section>

        <section className="text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              placeholder={`Search by ${sortOption === 'location' ? 'area' : sortOption === 'petBloodType' ? 'blood group' : 'name'}...`}
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
              <option value="location">Area</option>
              <option value="petBloodType">Blood Group</option>
            </select>
            <button
              onClick={() => setFilteredDonors(filteredDonors)}
              className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2"
            >
              Search
            </button>
          </div>
        </section>

        <section className="text-gray-100 p-6 rounded-lg shadow-lg overflow-x-scroll no-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Location</th>
                <th className="px-4 py-2 border">Pet Type</th>
                <th className="px-4 py-2 border">Pet Age</th>
                <th className="px-4 py-2 border">Pet Weight</th>
                <th className="px-4 py-2 border">Vaccination Status</th>
                <th className="px-4 py-2 border">Recent Illness</th>
                <th className="px-4 py-2 border">Medical History (last 6 months)</th>
                <th className="px-4 py-2 border">Pet Blood Type</th>
                <th className="px-4 py-2 border">Mail</th>
                <th className="px-4 py-2 border">Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonors.slice(0, 10).map((donor, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{donor.name}</td>
                  <td className="px-4 py-2 border">{donor.location}</td>
                  <td className="px-4 py-2 border">{donor.petType}</td>
                  <td className="px-4 py-2 border">{donor.petAge}</td>
                  <td className="px-4 py-2 border">{donor.petWeight}</td>
                  <td className="px-4 py-2 border">{donor.vaccinationStatus}</td>
                  <td className="px-4 py-2 border">{donor.recentIllness}</td>
                  <td className="px-4 py-2 border">{donor.medicalHistory6Months}</td>
                  <td className="px-4 py-2 border">{donor.petBloodType}</td>
                  <td className="px-4 py-2 border">{donor.mail}</td>
                  <td className="px-4 py-2 border">{donor.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default DogDonor;
