export default function MeetSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            Meet the Face <br /> Behind the Glow
          </h2>
          <p className="text-gray-600 mb-6">
            Rigoleta’s passion for skincare started in her teenage years and has grown into a fulfilling career as a trusted beauty therapist.
          </p>
          <p className="text-gray-600 mb-8">
            Combining years of experience with a genuine love for helping clients, she specialises in personalised facial treatments designed to enhance natural beauty and boost confidence.
          </p>
          <button className="bg-gradient-to-b from-[#C59C5D] to-[#D3B078] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition duration-300">
            Read More About Rigoleta
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
