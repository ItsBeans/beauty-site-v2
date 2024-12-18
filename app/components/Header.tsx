import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/images/Logo.png"
            alt="Rigoleta Logo"
            className="h-16 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 ml-auto mr-8">
        <a
          href="#"
          className="text-black font-semibold hover:text-gray-900 transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#"
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          About
        </a>
        <div className="relative group">
          <a
            href="#"
            className="flex items-center text-black font-semibold hover:text-gray-700"
          >
            Services
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </a>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md py-2 w-40">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Service 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Service 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Service 3
            </a>
          </div>
        </div>
        <a
          href="#"
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          Contact Us
        </a>
      </nav>

      {/* Button */}
      <button className="px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200">
        Book Now
      </button>
    </header>
  );
}


