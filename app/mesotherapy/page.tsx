import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Service from "@/app/components/Service";

export default function Mesotherapy() {
  const details = {
    title: "Mesotherapy",
    description:
      "Mesotherapy is a minimally invasive treatment that injects a customised blend of vitamins, antioxidants, and nutrients directly into your skin layers. This revitalising procedure enhances hydration, improves elasticity, and boosts skin firmness while restoring your natural glow.",
    additionalInfo:
      "Perfect for dull, tired skin or fine lines, mesotherapy delivers noticeable results for a healthier, radiant complexion.",
    image: "/images/all/web/Mesotherapy.jpg",
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
