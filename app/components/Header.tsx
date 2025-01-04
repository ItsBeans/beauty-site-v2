'use client';
import Link from "next/link";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 md:px-20 py-4 shadow-md">
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

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-8 ml-auto mr-8">
        <Link
          href="/"
          className="text-black hover:text-gray-900 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-black hover:text-gray-700 transition-colors duration-200"
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
            className="flex items-center text-black hover:text-gray-700"
          >
            Services
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Link>
          {isDropdownOpen && (
            <div className="absolute left-0 top-full bg-white shadow-md rounded-md py-2 w-40 z-50">
              <Link
                href="/dermaplaning"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dermaplaning
              </Link>
              <Link
                href="/biorepeel"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                BioRePeel
              </Link>
              <Link
                href="/microneedling"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Microneedling
              </Link>
              <Link
                href="/mesotherapy"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mesotherapy
              </Link>
              <Link
                href="/profhilo"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profhilo
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/contact"
          className="text-black hover:text-gray-700 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col space-y-6 px-6 py-4">
            <Link
              href="/"
              className="text-black hover:text-gray-900 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-gray-700 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-black hover:text-gray-700 w-full"
              >
                Services
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white shadow-md rounded-md py-2 w-full">
                  <Link
                    href="/service/dermaplaning"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dermaplaning
                  </Link>
                  <Link
                    href="/service/biorepeel"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BioRePeel
                  </Link>
                  <Link
                    href="/service/microneedling"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Microneedling
                  </Link>
                  <Link
                    href="/service/mesotherapy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mesotherapy
                  </Link>
                  <Link
                    href="/service/profhilo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profhilo
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-black hover:text-gray-700 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <button
              className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services">
                Book Now
              </Link>
            </button>
          </div>
        </nav>
      )}

      {/* Button */}
      <button className="hidden md:block px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200 whitespace-nowrap">
        <Link href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services">
          Book Now
        </Link>
      </button>
    </header>
  );
}
