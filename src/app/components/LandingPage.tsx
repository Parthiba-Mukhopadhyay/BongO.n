import Image from 'next/image';
import img1 from '../assets/Owner.jpeg';
import img2 from '../assets/Vaccination.jpeg';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';

export default function LandingPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-900 text-white p-0 m-0">
            <main className="flex-1 w-full">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                                        Connect with Dog Blood Donors, Save Lives
                                    </h1>
                                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                                        PAW-sitive is a platform that connects dog blood donors with pet clinics and blood banks in times of emergency. Find
                                        compatible donors near you and get the blood your dog needs.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <RegisterLink className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500">
                                        Register Now!!
                                    </RegisterLink>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <Image
                                    src={img1}
                                    width="550"
                                    height="310"
                                    alt="Dog Blood Donation"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-red-600">Key Features</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Connecting Dog Blood Donors and Banks</h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl">
                                    PAW-sitive provides a seamless platform for dog blood donors and pet clinics to connect in times of
                                    emergency. Our key features include real-time availability, location-based search, and secure data
                                    management.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Find Donors</h3>
                                            <p className="text-gray-400">
                                                Search for compatible dog blood donors near your location and connect with them in real-time.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Find Blood Banks</h3>
                                            <p className="text-gray-400">
                                                Locate the nearest blood banks and check their real-time availability of dog blood stocks.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Become a Donor</h3>
                                            <p className="text-gray-400">
                                                Register your dog as a blood donor and help save lives in emergencies.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Locate Pet Clinics</h3>
                                            <p className="text-gray-400">
                                                Find nearby pet clinics offering emergency services and blood transfusions for dogs.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <Image
                                    src={img2}
                                    width="550"
                                    height="310"
                                    alt="Dog Blood Donation"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
                    <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-red-600">Testimonials</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                                Hear from the people who have used PAW-sitive to connect with dog blood donors and save lives.
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Image 
                                        src={img1}
                                        width="48"
                                        height="48"
                                        alt="Dog Blood Donation"
                                        className="w-12 h-12 bg-gray-700 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-medium">John Doe</p>
                                        <p className="text-sm text-gray-400">Pet Owner</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold">
                                    &ldquo;PAW-sitive helped me find a compatible blood donor for my dog during a medical emergency.
                                    The process was seamless and the donor was very responsive.&rdquo;
                                </blockquote>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Image 
                                        src={img2}
                                        width="48"
                                        height="48"
                                        alt="Dog Blood Donation"
                                        className="w-12 h-12 bg-gray-700 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-medium">Jane Smith</p>
                                        <p className="text-sm text-gray-400">Dog Blood Donor Owner</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold">
                                    &ldquo;I've been a regular blood donor for my dog, and PAW-sitive makes it easy for me to connect
                                    with pet clinics in need. The app is user-friendly and the process is straightforward.&rdquo;
                                </blockquote>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Image 
                                        src={img1}
                                        width="48"
                                        height="48"
                                        alt="Dog Blood Donation"
                                        className="w-12 h-12 bg-gray-700 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-medium">Michael Johnson</p>
                                        <p className="text-sm text-gray-400">Pet Clinic Manager</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold">
                                    &ldquo;PAW-sitive has been a game-changer for our clinic. We can now easily connect with donors
                                    and manage our blood stocks more efficiently. The platform has helped us save more lives.&rdquo;
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
                    <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-red-600">Register Now</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Cause and Save Lives</h2>
                            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                                Become a part of our community and contribute to saving the lives of dogs. Whether you're a pet owner,
                                a potential donor, or a clinic, your participation can make a significant difference.
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            <div className="p-6 space-y-4 bg-gray-900 rounded-lg">
                                <DropletsIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Register as a Donor</h3>
                                    <p className="text-gray-400">
                                        Sign up to become a dog blood donor and help save lives in emergencies.
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-900 rounded-lg">
                                <DropletsIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Register Your Clinic</h3>
                                    <p className="text-gray-400">
                                        Join our network of pet clinics and blood banks to provide critical services in times of need.
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-900 rounded-lg">
                                <DropletsIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Support the Cause</h3>
                                    <p className="text-gray-400">
                                        Help us spread the word and support our mission to save the lives of dogs through blood donation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

const DropletsIcon = ({ className }: { className: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.172L5.05 10.122c-2.34 2.34-2.34 6.142 0 8.482 2.34 2.34 6.142 2.34 8.482 0 2.34-2.34 2.34-6.142 0-8.482L12 3.172z"
        />
    </svg>
);
