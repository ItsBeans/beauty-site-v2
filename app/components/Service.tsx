import React from 'react';
import Link from 'next/link';

interface ServicePageProps {
  title: string;
  description: string;
  additionalInfo: string;
  image: string;
}

const Service: React.FC<ServicePageProps> = ({ title, description, additionalInfo, image }) => {
  return (
    <div className="bg-white w-full mx-auto px-6 py-16 mt-0">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-600 mb-6">{additionalInfo}</p>
          <button className="px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200">
  <Link href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services">
    Book Appointment Now
  </Link>
</button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img src={image} alt={title} className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Service;
