import Link from "next/link";

export default function CallToAction() {
    return (
      <section
        className="relative py-20 bg-gray-200 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/home/web/Background-Image.jpg')" }}
      >
        {/* Overlay to enhance text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s Start Your Skincare Journey
          </h2>
          {/* Subtitle */}
          <p className="text-lg text-white mb-8">
            Take the first step to radiant, healthy skin with our personalised treatments.
          </p>
          {/* Button */}
          <button className="px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200">
  <Link href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services">
    Book Appointment Now
  </Link>
</button>
        </div>
      </section>
    );
  }
  