export default function HiSection() {
    return (
      <section className="relative bg-white py-16">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#C59C5D] to-[#D3B078]"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Hi, I’m Rigoleta – your trusted beauty therapist with a heartfelt passion for skincare.
          </h1>
  
          {/* First Row: Text + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="bg-white shadow-lg rounded-3xl p-6">
              <h3 className="text-2xl text-gray-800 mb-4">
                A Lifelong Dream Turned Reality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                My dream of becoming a beautician began in my teenage years when I first visited an
                aesthetician to address acne concerns. Though life initially took me in a different
                direction as a teacher, my dream never faded. In 2010, I followed my heart and earned
                a Level 3 qualification from the London College of Beauty Therapy. Since then, I’ve
                been on an incredible journey – from working in salons and offering mobile treatments
                to now specialising exclusively in facial skincare.
              </p>
            </div>
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/about/web/Lifelong-Dream.jpg"
                alt="Skincare Therapy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
  
          {/* Second Row: Image + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/about/web/Caring-for-your-skin.jpg"
                alt="Facial Treatment"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="bg-white shadow-lg rounded-3xl p-6">
              <h3 className="text-2xl text-gray-800 mb-4">
                Caring for Your Skin, Inside and Out
              </h3>
              <p className="text-gray-600 leading-relaxed">
                What sets my work apart is the deep connection I build with my clients. I take pride in
                earning your trust, listening to your skin concerns – whether it&apos;s acne, pigmentation,
                or fine lines – and tailoring treatments to meet your goals. Nothing brings me more joy
                than seeing visible results and the renewed confidence they bring. I work with natural,
                organic products and advanced skin boosters to deliver treatments that not only enhance
                beauty but also prioritise wellbeing. Every session is a blend of skincare and
                relaxation – often including a head or foot massage to leave you refreshed and
                revitalised.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  