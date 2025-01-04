import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Service from "@/app/components/Service";

export default function Dermaplaning() {
  const details = {
    title: "Dermaplaning",
    description:
      "Dermaplaning is a non-invasive skincare treatment that uses a fine blade to gently exfoliate dead skin cells and vellus hair, commonly known as peach fuzz. This painless procedure removes impurities, leaving your skin noticeably smoother with an instant glow and no downtime.",
    additionalInfo:
      "Beyond enhancing your skin’s natural radiance, dermaplaning also improves the absorption of skincare products, allowing them to penetrate more deeply and deliver enhanced benefits for a more effective routine.",
    image: "/images/all/web/Dermaplaning.jpg",
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
