const treatments = [
    {
      title: "Quick Glow Facial",
      description:
        "The Quick Glow Facial is perfect for busy schedules, offering instant refreshment and rejuvenation in just 30 minutes. This treatment restores your skin's natural glow with a gentle cleanse, exfoliation, and hydration boost, leaving you looking radiant and revitalised.",
      highlights: [
        "A gentle cleanse to remove impurities.",
        "Exfoliation to brighten and smooth your skin.",
        "Hydration that leaves your skin plump and glowing.",
      ],
      image: "/images/facials/web/Quick-Glow-Facial.jpg",
    },
    {
      title: "Deep Cleanse Facial",
      description:
        "The Deep Cleanse Facial is designed to target congestion and impurities, leaving your skin refreshed and balanced. With a combination of thorough cleansing, exfoliation, and extractions, this treatment unclogs pores and restores your skin's natural clarity.",
      highlights: [
        "A double cleanse to remove makeup and impurities.",
        "Gentle exfoliation to renew your skin.",
        "Professional extractions to unclog pores.",
      ],
      image: "/images/facials/web/Deep-Cleanse-Facial.jpg",
    },
    {
      title: "Face Massage",
      description:
        "Our Face Massage is more than just skincare; it's a moment of relaxation and stress relief. This soothing treatment boosts circulation, promotes lymphatic drainage, and leaves your skin looking naturally radiant and refreshed.",
      highlights: [
        "Gentle, rhythmic movements to stimulate blood flow.",
        "Relaxation techniques to reduce facial tension.",
        "A natural boost in skin vitality and glow.",
      ],
      image: "/images/facials/web/Face-Massage.jpg",
    },
  ];
  
  export default function FacialTreatments() {
    return (
      <section className="py-16 bg-white">
        {/* Section Title */}
        <div className="relative text-center mb-12">
          <div className="absolute top-0 left-0 w-full h-[110%] bg-gradient-to-b from-[#C59C5D] to-[#D3B078]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-4">Our Facial Treatments</h2>
            <p className="text-white max-w-2xl mx-auto">
              Our facial treatments are designed to address a variety of skin concerns, using natural
              and advanced skincare techniques. Each facial is carefully personalised to ensure you
              achieve glowing, healthy skin while enjoying a relaxing, pampering experience.
            </p>
          </div>
        </div>
  
        {/* Treatments */}
        <div className="relative max-w-7xl mx-auto px-6 space-y-12">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:space-x-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
  
              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 md:px-8">
                <h3 className="text-3xl font-semibold text-gray-800">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  {treatment.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                <button className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-300">
                  Book Appointment Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  