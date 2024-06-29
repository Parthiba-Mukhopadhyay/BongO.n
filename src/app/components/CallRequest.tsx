import { useState } from 'react';
import axios from 'axios';

const apiKey = 'eNagty44.AJgHwEfJnKWbrCn8wy54U0RX1OwD2UVz';
const apiBaseUrl = 'https://api.callchimp.ai/v1';

const CallRequest: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [supervisorId, setSupervisorId] = useState<number | null>(null);
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [subscribers, setSubscribers] = useState<any[]>([]);
    const [callCreated, setCallCreated] = useState(false);

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
    };

    const createSupervisor = async () => {
        try {
            const response = await axios.post(
                `${apiBaseUrl}/supervisors`,
                {
                    name: userName,
                    phone: phoneNumber,
                    priority: 1,
                    organization: 1
                },
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            setSupervisorId(response.data.id);
            sendOtp(response.data.id);
        } catch (error) {
            console.error('Error creating supervisor:', error);
        }
    };

    const sendOtp = async (id: number) => {
        try {
            await axios.post(
                `${apiBaseUrl}/supervisors/${id}/send_otp`,
                {},
                {
                    headers: {
                        'x-api-key': apiKey
                    }
                }
            );
            setOtpSent(true);
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const verifyOtp = async (id: number) => {
        try {
            await axios.post(
                `${apiBaseUrl}/supervisors/${id}/verify_otp`,
                { otp },
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            setOtpVerified(true);
            listSubscribers();
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    const listSubscribers = async () => {
        try {
            const response = await axios.get(`${apiBaseUrl}/subscribers`, {
                headers: {
                    'x-api-key': apiKey
                }
            });
            setSubscribers(response.data.results);
        } catch (error) {
            console.error('Error listing subscribers:', error);
        }
    };

    const createCall = async (leadId: number) => {
        try {
            await axios.post(
                `${apiBaseUrl}/calls`,
                { lead: leadId },
                {
                    headers: {
                        'x-api-key': apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            setCallCreated(true);
        } catch (error) {
            console.error('Error creating call:', error);
        }
    };

    return (
            <div className="bg-white rounded w-full max-w-md grid place-items-center">
                {!otpSent ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-black">Enter Your Details: </h2>
                        <input
                            type="text"
                            value={userName}
                            onChange={handleUserNameChange}
                            placeholder="Your Name"
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                        />
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            placeholder="Phone Number"
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                        />
                        <button 
                            onClick={createSupervisor}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Send OTP
                        </button>
                    </div>
                ) : !otpVerified ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
                        <input
                            type="text"
                            value={otp}
                            onChange={handleOtpChange}
                            placeholder="OTP"
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                        />
                        <button 
                            onClick={() => supervisorId && verifyOtp(supervisorId)}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Verify OTP
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Select a Subscriber</h2>
                        <ul className="mb-4">
                            {subscribers.map(subscriber => (
                                <li key={subscriber.id} className="flex justify-between items-center border-b py-2">
                                    <span>{subscriber.first_name} {subscriber.last_name}</span>
                                    <button 
                                        onClick={() => createCall(subscriber.id)}
                                        className="bg-green-500 text-black py-1 px-2 rounded hover:bg-green-600"
                                    >
                                        Call
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {callCreated && <p className="text-green-600">Call has been created successfully.</p>}
                    </div>
                )}
            </div>
    );
};

export default CallRequest;
