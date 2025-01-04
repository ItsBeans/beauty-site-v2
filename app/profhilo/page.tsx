import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Service from "@/app/components/Service";

export default function Profhilo() {
  const details = {
    title: "Profhilo",
    description:
      "Profhilo is an advanced skin booster designed to deeply hydrate, lift, and rejuvenate your skin. By stimulating collagen and elastin production, this quick and virtually painless treatment delivers long-lasting hydration and plumping effects.",
    additionalInfo:
      "Over time, Profhilo visibly improves skin elasticity and smoothness, making it ideal for ageing skin, fine lines, and dehydration.",
    image: "/images/all/web/Profhilo.jpg",
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
