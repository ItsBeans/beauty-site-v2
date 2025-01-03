import Link from "next/link";

export default function ServiceIntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl text-black leading-tight mb-6">
            Discover the <br /> perfect facial for<br /> your skin.
          </h1>
          <p className="text-gray-700 text-lg mb-6">
          From a quick radiance boost to deep cleansing and relaxation, our facials are tailored to meet your skin&apos;s unique needs. Let us rejuvenate your skin and leave you feeling refreshed and confident.
          </p>
          <Link
            href="#"
            className="px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200 font-semibold"
          >
            Explore facial treatments   
          </Link>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <img
              src="/images/facials/web/Hero.jpg"
              alt="Relaxing Spa Treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
