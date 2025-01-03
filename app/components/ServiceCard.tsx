import Link from 'next/link';
import React from 'react';

const services = [
  { title: 'Dermaplaning', description: 'Smooth away dead skin and fine hair for a flawless look.', icon: '/icons/SVG/Dermaplaning.svg' ,page:'/service/dermaplaning'},
  { title: 'BioRePeel', description: 'Brighten and refresh your skin with no downtime.', icon: '/icons/SVG/BioRePeel.svg',page:'/service/biorepeel' },
  { title: 'Microneedling', description: 'Boost collagen and improve texture for youthful, radiant skin.', icon: '/icons/SVG/Microneeling.svg' ,page:'/service/microneedling'},
  { title: 'Mesotherapy', description: 'Nourish your skin with a powerful infusion of vitamins and nutrients.', icon: '/icons/SVG/Profhilo-Mesotherapy.svg' ,page:'/service/mesotherapy'},
  { title: 'Profhilo', description: 'Hydrate, lift, and refresh with the ultimate skin booster.', icon: '/icons/SVG/Profhilo-Mesotherapy.svg' ,page:'/service/profhilo' },
];

const ServiceCard: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#C59C5D] to-[#D3B078]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-4">Your Skin, Our Passion</h2>
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
          Whether you’re seeking a quick pick-me-up or advanced rejuvenation treatments, we’ve got you covered. Each service is tailored
          to your unique needs, combining science, nature, and the art of skincare for beautiful, lasting results.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-start hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
            >
              {/* Service Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="h-12 w-12 mb-4"
              />
              {/* Service Title */}
              <h3 className="text-3xl text-gray-800 mb-2">{service.title}</h3>
              {/* Service Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              {/* Read More Link */}
              <Link
                href={service.page}
                className="text-gray-600 hover:underline"
              >
                Read More &gt;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;


