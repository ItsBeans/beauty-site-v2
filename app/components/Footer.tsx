import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-8">
      <div className="container mx-auto px-4 md:px-20 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/Logo.png"
              alt="Rigoleta Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-gray-700 text-center md:text-left">
              Mirror Mirror Unisex Salon
            </p>
            <p className="text-sm text-gray-500 text-center md:text-left">
              376 Oldfield Lane North, Greenford, UB6 8PU
            </p>
            <p className="text-sm text-gray-500 text-center md:text-left">
              07725846069
            </p>
          </div>

          {/* Services Column 1 */}
          <div>
            <h4 className="text-black text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dermaplaning"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  Dermaplaning
                </Link>
              </li>
              <li>
                <Link
                  href="/biorepeel"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  BioRePeel
                </Link>
              </li>
              <li>
                <Link
                  href="/microneedling"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  Microneedling
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h4 className="text-black text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mesotherapy"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  Mesotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="/profhilo"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  Profhilo
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-black text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-black transition duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-4">
          <p className="text-center text-sm text-gray-500">
            &copy; Rigoleta Beauty 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
