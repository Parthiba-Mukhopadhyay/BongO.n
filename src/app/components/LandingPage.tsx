import Link from 'next/link';

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
                                        Connect with Blood Donors, Save Lives
                                    </h1>
                                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                                        Jeevan Saathi is a platform that connects blood donors with blood banks in times of emergency. Find
                                        compatible donors near you and get the blood you need.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <input
                                        type="text"
                                        placeholder="Search by location or blood type"
                                        className="max-w-lg flex-1 bg-gray-700 text-white p-2 rounded-lg focus:bg-gray-600"
                                    />
                                    <button type="submit" className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500">
                                        Search
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-red-600">Key Features</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Connecting Blood Donors and Banks</h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl">
                                    Jeevan Saathi provides a seamless platform for blood donors and blood banks to connect in times of
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
                                                Search for compatible blood donors near your location and connect with them in real-time.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Find Blood Banks</h3>
                                            <p className="text-gray-400">
                                                Locate the nearest blood banks and check their real-time availability of blood stocks.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Become a Donor</h3>
                                            <p className="text-gray-400">
                                                Register as a blood donor and help save lives in emergencies.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
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
                                Hear from the people who have used Jeevan Saathi to connect with blood donors and save lives.
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                                    <div>
                                        <p className="text-sm font-medium">John Doe</p>
                                        <p className="text-sm text-gray-400">Blood Recipient</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold">
                                    &ldquo;Jeevan Saathi helped me find a compatible blood donor in my area during a medical emergency.
                                    The process was seamless and the donor was very responsive.&rdquo;
                                </blockquote>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                                    <div>
                                        <p className="text-sm font-medium">Jane Smith</p>
                                        <p className="text-sm text-gray-400">Blood Donor</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold">
                                    &ldquo;I've been a regular blood donor for years, and Jeevan Saathi makes it easy for me to connect
                                    with blood banks in need. The app is user-friendly and the process is straightforward.&rdquo;
                                </blockquote>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                                    <div>
                                        <p className="text-sm font-medium">Michael Johnson</p>
                                        <p className="text-sm text-gray-400">Blood Bank Manager</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold">
                                    &ldquo;Jeevan Saathi has been a game-changer for our blood bank. We can now easily connect with donors
                                    and manage our blood stocks more efficiently. The platform has helped us save more lives.&rdquo;
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
                    <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">Data Security</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Secure and Reliable</h2>
                            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                                At Jeevan Saathi, we take data security and privacy seriously. Your personal information is encrypted
                                and stored securely, and we follow strict protocols to ensure the confidentiality of your data.
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            <div className="p-6 space-y-4 bg-gray-900 rounded-lg">
                                <DropletsIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Secure Encryption</h3>
                                    <p className="text-gray-400">
                                        We use advanced encryption protocols to protect your personal information and ensure data security.
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-900 rounded-lg">
                                <DropletsIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Data Privacy</h3>
                                    <p className="text-gray-400">
                                        Your data is stored securely and is only accessible to authorized personnel. We follow strict
                                        privacy protocols to ensure the confidentiality of your information.
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 space-y-4 bg-gray-900 rounded-lg">
                                <DropletsIcon className="h-12 w-12" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">Reliable Platform</h3>
                                    <p className="text-gray-400">
                                        Our platform is built to handle high volumes of traffic and ensure smooth and reliable performance
                                        even during peak times.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        <Link href="#" className="flex items-center justify-center" prefetch={false}>
                            <DropletsIcon className="h-6 w-6" />
                            <span className="font-bold text-xl">Jeevan Saathi</span>
                        </Link>
                        <p className="mt-2 sm:mt-0">&copy; 2024 Jeevan Saathi. All rights reserved.</p>
                    </div>
                </div>
            </footer>
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

