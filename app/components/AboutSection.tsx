export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            Skincare, <br/> Passion, and Confidence - <br/> meet Rigoleta
          </h2>
          <p className="text-gray-600 mb-6">
          With a lifelong dream of making people feel beautiful and confident, Rigoleta brings expertise, care, and a personalised touch to every treatment. Her journey from a teenage skincare enthusiast to a professional beauty therapist is a story of passion, dedication, and the joy of helping others.
          </p>
          <button className="bg-gradient-to-b from-[#C59C5D] to-[#D3B078] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition duration-300">
            Read Rigoleta's Story
          </button>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 relative flex justify-center">
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg w-[70%] sm:w-[60%] md:w-[55%] lg:w-[50%]">
            <img
              src="/images/about/web/Rigoleta-Hero.jpg"
              alt="Rigoleta Portrait"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Overlapping Smaller Image */}
          <div className="absolute bottom-4 left-10 sm:bottom-6 sm:left-8 md:bottom-8 md:left-6 lg:bottom-10 lg:left-8 w-[40%] sm:w-[35%] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/about/web/Hero.jpg"
              alt="Facial Treatment"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
