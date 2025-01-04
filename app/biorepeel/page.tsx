import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Service from "@/app/components/Service";

export default function BioRePeel() {
  const details = {
    title: "BioRePeel",
    description:
      "BioRePeel is a revolutionary treatment that refreshes and renews your skin without downtime. Combining cutting-edge technology with skin-nourishing ingredients, this chemical peel stimulates collagen production, brightens, hydrates, and smooths your skin while fading imperfections like acne scars and hyperpigmentation.",
    additionalInfo:
      "The painless and quick procedure offers visible results with little to no peeling, making it perfect for busy schedules. Ideal for tackling fine lines, uneven tone, and dullness, BioRePeel reveals a radiant and rejuvenated complexion.",
    image: "/images/all/web/Biorepeel.jpg",
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
