import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Service from "@/app/components/Service";

export default function Microneedling() {
  const details = {
    title: "Microneedling",
    description:
      "Microneedling stimulates your skin’s natural healing process by creating tiny micro-injuries that encourage collagen and elastin production. This minimally invasive treatment enhances skin texture, improves elasticity, and reduces the appearance of scars and fine lines.",
    additionalInfo:
      "With minimal discomfort and short recovery time, microneedling helps hydrate your skin and refine its tone, leaving it looking youthful and vibrant.",
    image: "/images/all/web/Microneedling.jpg",
  };

  return (
    <>
      <Header />
      <Service
        title={details.title}
        description={details.description}
        additionalInfo={details.additionalInfo}
        image={details.image}
      />
      <Footer />
    </>
  );
}
