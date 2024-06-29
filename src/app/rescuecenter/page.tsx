'use client';
import React, { useState, useEffect } from 'react';

interface AmbulanceService {
  name: string;
  area: string;
  ambulanceAvailable: boolean;
  oxygenAvailable: boolean;
  contact: string;
}

const predefinedAmbulanceServices: AmbulanceService[] = [
  { name: 'City Ambulance', area: 'New York', ambulanceAvailable: true, oxygenAvailable: true, contact: '123-456-7890' },
  { name: 'Quick Response Ambulance', area: 'Los Angeles', ambulanceAvailable: false, oxygenAvailable: true, contact: '234-567-8901' },
  { name: 'Metro Ambulance', area: 'Chicago', ambulanceAvailable: true, oxygenAvailable: false, contact: '345-678-9012' },
  { name: 'Emergency Services', area: 'Houston', ambulanceAvailable: true, oxygenAvailable: true, contact: '456-789-0123' },
  { name: 'Health First Ambulance', area: 'Phoenix', ambulanceAvailable: false, oxygenAvailable: false, contact: '567-890-1234' },
  { name: 'Rapid Ambulance', area: 'Philadelphia', ambulanceAvailable: true, oxygenAvailable: true, contact: '678-901-2345' },
  { name: 'LifeSaver Ambulance', area: 'San Antonio', ambulanceAvailable: true, oxygenAvailable: true, contact: '789-012-3456' },
  { name: 'Unity Ambulance', area: 'San Diego', ambulanceAvailable: false, oxygenAvailable: true, contact: '890-123-4567' },
  { name: 'Hope Ambulance', area: 'Dallas', ambulanceAvailable: true, oxygenAvailable: false, contact: '901-234-5678' },
  { name: 'Trust Ambulance', area: 'San Jose', ambulanceAvailable: true, oxygenAvailable: true, contact: '012-345-6789' },
];

const Rescuecenter: React.FC = () => {
  const [ambulanceServices, setAmbulanceServices] = useState<AmbulanceService[]>(predefinedAmbulanceServices);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredAmbulanceServices, setFilteredAmbulanceServices] = useState<AmbulanceService[]>(predefinedAmbulanceServices);

  // useEffect(() => {
  //   // Fetch ambulance service data from the database
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/ambulances'); // Replace with your API endpoint
  //       setAmbulanceServices(response.data);
  //     } catch (error) {
  //       console.error('Error fetching ambulance service data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    let sortedAmbulanceServices = [...ambulanceServices];

    if (sortOption === 'area') {
      sortedAmbulanceServices.sort((a, b) => a.area.localeCompare(b.area));
    }

    setFilteredAmbulanceServices(
      sortedAmbulanceServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [ambulanceServices, searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <section className=" text-gray-900 p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-red-600">Welcome to the Ambulance Services Directory</h1>
          <p className="mt-2 text-gray-500">
            Find the nearest ambulance services and check their availability.
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
              <option value="area">Area</option>
            </select>
            <button
              onClick={() => setFilteredAmbulanceServices(filteredAmbulanceServices)}
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
                <th className="px-4 py-2 border">Area</th>
                <th className="px-4 py-2 border">Ambulance Available</th>
                <th className="px-4 py-2 border">Oxygen Available</th>
                <th className="px-4 py-2 border">Contact</th>
              </tr>
            </thead>
            <tbody>
              {filteredAmbulanceServices.slice(0, 10).map((service, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{service.name}</td>
                  <td className="px-4 py-2 border">{service.area}</td>
                  <td className="px-4 py-2 border">
                    {service.ambulanceAvailable ? 'Available' : 'Not Available'}
                  </td>
                  <td className="px-4 py-2 border">
                    {service.oxygenAvailable ? 'Available' : 'Not Available'}
                  </td>
                  <td className="px-4 py-2 border">{service.contact}</td>
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
