'use client';
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
        <Link
          href="/"
          className="text-black font-semibold hover:text-gray-900 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          About
        </Link>
        {/* Dropdown Menu */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link
            href="/services"
            className="flex items-center text-black font-semibold hover:text-gray-700"
          >
            Services
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Link>
          {isDropdownOpen && (
            <div className="absolute left-0 top-full bg-white shadow-md rounded-md py-2 w-40 z-50">
              <Link
                href="/service/dermaplaning"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dermaplaning
              </Link>
              <Link
                href="/service/biorepeel"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                BioRePeel
              </Link>
              <Link
                href="/service/microneedling"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Microneedling
              </Link>
              <Link
                href="/service/mesotherapy"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mesotherapy
              </Link>
              <Link
                href="/service/profhilo"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profhilo
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/contact"
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </nav>

      {/* Button */}
      <button className="px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200">
  <Link href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services">
    Book Now
  </Link>
</button>
    </header>
  );
}
