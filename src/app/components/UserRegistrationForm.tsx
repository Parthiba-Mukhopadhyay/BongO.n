'use client'
import { useState, ChangeEvent, FormEvent } from 'react';

interface SubscriptionData {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  address: string;
  pinCode: string;
  age: string;
  bloodGroup: string;
  medicalHistory: string;
  email: string;
}

export default function ExtendedEmailSubscriptionForm() {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    address: '',
    pinCode: '',
    age: '',
    bloodGroup: '',
    medicalHistory: '',
    email: '',
  });
  const [message, setMessage] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          age: '',
          bloodGroup: '',
          medicalHistory: '',
          email: '',
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
      <form onSubmit={subscribeHandler} className="bg-white shadow-md rounded px-8 py-6">
        {/* Form Fields */}
        {['firstName', 'lastName', 'state', 'city', 'address', 'pinCode', 'age', 'bloodGroup', 'email'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={field}
              type={field === 'age' ? 'number' : 'text'}
              value={(subscriptionData as any)[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              required
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicalHistory">
            Any Medical History
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="medicalHistory"
            value={subscriptionData.medicalHistory}
            onChange={handleChange}
            placeholder="Enter any medical history"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Subscribe
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
