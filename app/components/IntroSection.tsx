import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl text-black leading-tight mb-6">
            Feel Beautiful.<br /> Be Confident.<br /> Glow Naturally.
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            At Rigoleta Beauty, we believe that skincare is more than just a
            routine – it's self-care. From rejuvenating facials to advanced
            treatments, we're here to help you achieve healthy, radiant skin
            while embracing relaxation and wellbeing.
          </p>
          <Link
            href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services"
            className="px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200 font-semibold"
          >
            Book Your Appointment Now    
          </Link>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <img
              src="/images/home/web/Hero.jpg"
              alt="Relaxing Spa Treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

