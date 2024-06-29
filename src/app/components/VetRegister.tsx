'use client'
import { useState, ChangeEvent, FormEvent } from 'react';

interface ClinicData {
  clinicName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  website: string;
  servicesOffered: string;
  workingHours: string;
}

export default function ClinicRegistrationForm() {
  const [clinicData, setClinicData] = useState<ClinicData>({
    clinicName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    website: '',
    servicesOffered: '',
    workingHours: '',
  });
  const [message, setMessage] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setClinicData((prevData) => ({ ...prevData, [id]: value }));
  };

  const registerHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch('/api/register-clinic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clinicData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setSuccess(true);
        setClinicData({
          clinicName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          phoneNumber: '',
          email: '',
          website: '',
          servicesOffered: '',
          workingHours: '',
        });
      } else {
        setMessage(data.message);
        setSuccess(false);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={registerHandler} className="bg-white shadow-md rounded px-8 py-6 overflow-y-scroll h-[500px]">
        {/* Form Fields */}
        {['clinicName', 'address', 'city', 'state', 'zipCode', 'phoneNumber', 'email', 'website', 'servicesOffered', 'workingHours'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={field}
              type="text"
              value={(clinicData as any)[field]}
              onChange={handleChange}
              placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              required
            />
          </div>
        ))}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      {message && (
        <p className={`text-center mt-4 ${success ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
