import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      {/* Footer section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Link
              href="#"
              className="flex items-center justify-center"
              prefetch={false}
            >
              <DropletsIcon className="h-6 w-6" />
              <span className="font-bold text-xl">Jeevan Saathi</span>
            </Link>
            <p className="mt-2 sm:mt-0">
              &copy; 2024 Jeevan Saathi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const DropletsIcon: React.FC<{ className: string }> = ({ className }) => (
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
  
export default Footer;
