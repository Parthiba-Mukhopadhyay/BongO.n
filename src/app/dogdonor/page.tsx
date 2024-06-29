'use client';
import React, { useState, useEffect } from 'react';

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

const predefinedDonors: Donor[] = [
  { name: 'John Doe', location: 'New York', petType: 'Dog', petAge: '3 years', petWeight: '25 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'A+', mail: 'john.doe@example.com', phone: '123-456-7890' },
  { name: 'Jane Smith', location: 'Los Angeles', petType: 'Cat', petAge: '2 years', petWeight: '15 kg', vaccinationStatus: 'Partial', recentIllness: 'Fever', medicalHistory6Months: 'Minor surgery', petBloodType: 'O-', mail: 'jane.smith@example.com', phone: '234-567-8901' },
  { name: 'Sam Brown', location: 'Chicago', petType: 'Dog', petAge: '4 years', petWeight: '28 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Annual checkup', petBloodType: 'B+', mail: 'sam.brown@example.com', phone: '345-678-9012' },
  { name: 'Lisa White', location: 'Houston', petType: 'Bird', petAge: '1 year', petWeight: '0.5 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'AB-', mail: 'lisa.white@example.com', phone: '456-789-0123' },
  { name: 'Paul Black', location: 'Phoenix', petType: 'Dog', petAge: '5 years', petWeight: '32 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'A-', mail: 'paul.black@example.com', phone: '567-890-1234' },
  { name: 'Amy Green', location: 'Philadelphia', petType: 'Cat', petAge: '3 years', petWeight: '18 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'O+', mail: 'amy.green@example.com', phone: '678-901-2345' },
  { name: 'Tom Blue', location: 'San Antonio', petType: 'Dog', petAge: '2 years', petWeight: '22 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'B-', mail: 'tom.blue@example.com', phone: '789-012-3456' },
  { name: 'Nina Red', location: 'San Diego', petType: 'Cat', petAge: '4 years', petWeight: '20 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'AB+', mail: 'nina.red@example.com', phone: '890-123-4567' },
  { name: 'Jack Yellow', location: 'Dallas', petType: 'Dog', petAge: '3 years', petWeight: '26 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'A+', mail: 'jack.yellow@example.com', phone: '901-234-5678' },
  { name: 'Emma Purple', location: 'San Jose', petType: 'Bird', petAge: '2 years', petWeight: '0.8 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'O-', mail: 'emma.purple@example.com', phone: '012-345-6789' },
  { name: 'Michael Gray', location: 'Seattle', petType: 'Dog', petAge: '6 years', petWeight: '30 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'B+', mail: 'michael.gray@example.com', phone: '111-222-3333' },
  { name: 'Sophia Brown', location: 'Boston', petType: 'Cat', petAge: '5 years', petWeight: '17 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'AB-', mail: 'sophia.brown@example.com', phone: '222-333-4444' },
  { name: 'Daniel Lee', location: 'Miami', petType: 'Dog', petAge: '4 years', petWeight: '25 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'A-', mail: 'daniel.lee@example.com', phone: '333-444-5555' },
  { name: 'Olivia King', location: 'Atlanta', petType: 'Cat', petAge: '3 years', petWeight: '16 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'O+', mail: 'olivia.king@example.com', phone: '444-555-6666' },
  { name: 'Ethan Taylor', location: 'Denver', petType: 'Dog', petAge: '2 years', petWeight: '20 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'B-', mail: 'ethan.taylor@example.com', phone: '555-666-7777' },
  { name: 'Isabella Wilson', location: 'Las Vegas', petType: 'Cat', petAge: '4 years', petWeight: '19 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'AB+', mail: 'isabella.wilson@example.com', phone: '666-777-8888' },
  { name: 'James Martinez', location: 'Washington D.C.', petType: 'Dog', petAge: '5 years', petWeight: '28 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'A+', mail: 'james.martinez@example.com', phone: '777-888-9999' },
  { name: 'Charlotte Anderson', location: 'Portland', petType: 'Cat', petAge: '3 years', petWeight: '18 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'O-', mail: 'charlotte.anderson@example.com', phone: '888-999-0000' },
  { name: 'Alexander Thomas', location: 'San Francisco', petType: 'Dog', petAge: '4 years', petWeight: '30 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'B+', mail: 'alexander.thomas@example.com', phone: '999-000-1111' },
  { name: 'Amelia Garcia', location: 'Austin', petType: 'Cat', petAge: '2 years', petWeight: '14 kg', vaccinationStatus: 'Up to date', recentIllness: 'None', medicalHistory6Months: 'Regular checkups', petBloodType: 'AB-', mail: 'amelia.garcia@example.com', phone: '000-111-2222' },
];


const DogDonor: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>(predefinedDonors);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>(predefinedDonors);

  useEffect(() => {
    let sortedDonors = [...donors];

    if (sortOption === 'location') {
      sortedDonors.sort((a, b) => a.location.localeCompare(b.location));
    } else if (sortOption === 'petBloodType') {
      sortedDonors.sort((a, b) => a.petBloodType.localeCompare(b.petBloodType));
    }

    setFilteredDonors(
      sortedDonors.filter(donor => {
        if (sortOption === 'location') {
          return donor.location.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (sortOption === 'petBloodType') {
          return donor.petBloodType.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return donor.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
      })
    );
  }, [donors, searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-gray-900 p-6 rounded-lg shadow-lg mb-6 bg-opacity-50">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the animal Blood Donor Directory</h1>
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