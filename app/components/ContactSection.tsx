export default function ContactSection() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              We would love to<br /> hear from you
            </h2>
            <p className="text-gray-600 mb-6">
            Have questions about our services? Need help choosing the 
perfect treatment for your skin? Or ready to book your next 
session? Whatever you need, we’re here to assist you every step of 
the way.
            </p>
            <button className="bg-gradient-to-b from-[#C59C5D] to-[#D3B078] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition duration-300">
              Fill in contact form
            </button>
          </div>
  
         
            {/* Main Image */}
            <div className="md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <img
              src="/images/contact/web/Hero.jpg"
              alt="Relaxing Spa Treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
            
          
        </div>
      </section>
    );
  }
  
  