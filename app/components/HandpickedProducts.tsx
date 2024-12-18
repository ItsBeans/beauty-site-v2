const products = [
    {
      title: "Neal’s Yard Remedies",
      description:
        "Renowned for their organic, sustainably-sourced ingredients, Neal’s Yard products nurture your skin while being kind to the planet. Perfect for those who value a natural and eco-friendly approach to skincare.",
      icon: "/icons/SVG/Products-Icon.svg",
    },
    {
      title: "Korean Skincare",
      description:
        "Harnessing advanced formulations, Korean skincare delivers exceptional hydration, brightening, and rejuvenation. These products are ideal for achieving a radiant, youthful glow.",
        icon: "/icons/SVG/Products-Icon.svg",
    },
    {
      title: "CellFusionC",
      description:
        "Trusted by dermatologists worldwide, CellFusionC offers cutting-edge skincare solutions tailored for sensitive and post-treatment skin. These medical-grade products restore and protect the skin barrier.",
        icon: "/icons/SVG/Products-Icon.svg",
    },
    {
      title: "Medik8",
      description:
        "Focused on science-led solutions, Medik8 provides targeted treatments for anti-ageing, pigmentation, and blemish-prone skin. Perfect for achieving visibly healthier, youthful skin.",
        icon: "/icons/SVG/Products-Icon.svg",
    },
  ];
  
  export default function HandpickedProducts() {
    return (
      <section className="py-16 bg-white relative">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#C59C5D] to-[#D3B078]"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Natural and Effective Skincare, <br /> Handpicked for You
          </h2>
          <p className="text-center text-white mb-12 max-w-2xl mx-auto">
            At Rigoleta Beauty, we prioritise the health of your skin with carefully chosen products that combine nature and science for unparalleled results.
          </p>
  
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-start hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
              >
                {/* Product Icon */}
                <img
                  src={product.icon}
                  alt={product.title}
                  className="h-12 w-12 mb-4"
                />
                {/* Product Title */}
                <h3 className="text-2xl text-gray-800 mb-2">
                  {product.title}
                </h3>
                {/* Product Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  