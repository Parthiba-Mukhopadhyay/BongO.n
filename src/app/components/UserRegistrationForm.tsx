'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { UploadButton } from "../../utils/uploadthing";

interface SubscriptionData {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  address: string;
  pinCode: string;
  email: string;
  phoneNumber: string;
  petType: string;
  petAge: string;
  petWeight: string;
  vaccinationStatus: string;
  recentIllness: string;
  medicalHistory6Months: string;
  petBloodType: string;
  certificateLink: string; // New field for the certificate link
}

export default function ExtendedEmailSubscriptionForm() {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    address: '',
    pinCode: '',
    email: '',
    phoneNumber: '',
    petType: '',
    petAge: '',
    petWeight: '',
    vaccinationStatus: 'Never Vaccinated',
    recentIllness: 'Not affected with serious illness',
    medicalHistory6Months: 'Not Affected with Tick Fever or Fleas',
    petBloodType: '',
    certificateLink: '', // Initialized field for the certificate link
  });
  const [message, setMessage] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setSubscriptionData((prevData) => ({ ...prevData, [id]: value }));
  };

  const subscribeHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setSuccess(true);
        setSubscriptionData({
          firstName: '',
          lastName: '',
          state: '',
          city: '',
          address: '',
          pinCode: '',
          email: '',
          phoneNumber: '',
          petType: '',
          petAge: '',
          petWeight: '',
          vaccinationStatus: 'Never Vaccinated',
          recentIllness: 'Not affected with serious illness',
          medicalHistory6Months: 'Not Affected with Tick Fever or Fleas',
          petBloodType: '',
          certificateLink: '', // Reset field for the certificate link
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
      <form onSubmit={subscribeHandler} className="rounded px-8 py-6 overflow-y-scroll h-[500px]">
        {['firstName', 'lastName', 'state', 'city', 'address', 'pinCode', 'email', 'phoneNumber', 'petType', 'petAge', 'petWeight', 'petBloodType'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={field}
              type={['petAge', 'petWeight'].includes(field) ? 'number' : 'text'}
              value={(subscriptionData as any)[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              required
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vaccinationStatus">
            Vaccination Status
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vaccinationStatus"
            value={subscriptionData.vaccinationStatus}
            onChange={handleChange}
            required
          >
            <option value="Not Vaccinated">Never Vaccinated</option>
            <option value="Vaccinated">Vaccinated in last 6 months</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recentIllness">
            Recent Illness
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="recentIllness"
            value={subscriptionData.recentIllness}
            onChange={handleChange}
            required
          >
            <option value="Affected">Affected with Serious Illness</option>
            <option value="Not affected">Not affected with serious illness</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicalHistory6Months">
            Medical History in Last 6 Months
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="medicalHistory6Months"
            value={subscriptionData.medicalHistory6Months}
            onChange={handleChange}
            required
          >
            <option value="Affected">Affected with Tick Fever and Fleas</option>
            <option value="Not Affected">Not Affected with Tick Fever or Fleas</option>
          </select>
        </div>

        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res.length > 0) {
              const fileUrl = res[0].url;
              setSubscriptionData((prevData) => ({ ...prevData, certificateLink: fileUrl }));
              alert("Upload Completed");
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
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
