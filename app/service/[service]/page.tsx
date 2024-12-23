import { notFound } from "next/navigation";
import Service from "@/app/components/Service";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const serviceDetails = {
  dermaplaning: {
    title: "Dermaplaning",
    description:
      "Dermaplaning is a non-invasive skincare treatment that uses a fine blade to gently exfoliate dead skin cells and vellus hair,commonly known as peach fuzz. This painless procedure removes impurities, leaving your skin noticeably smoother with an instantglow and no downtime.  ",
    additionalInfo:
      "Beyond enhancing your skin’s natural radiance, dermaplaning also  improves the absorption of skincare products, allowing them to penetrate more deeply and deliver enhanced benefits for a more effective routine.",
    image: "/images/all/web/Dermaplaning.jpg",
  },
  biorepeel: {
    title: "BioRePeel",
    description:
      "BioRePeel is a revolutionary treatment that refreshes and renews your skin without downtime. Combining cutting-edge technology with skin-nourishing ingredients, this chemical peel stimulates collagen production, brightens, hydrates, and smooths your skin while fading imperfections like acne scars and hyperpigmentation.",
    additionalInfo:
      "The painless and quick procedure offers visible results with little to no peeling, making it perfect for busy schedules. Ideal for tackling fine lines, uneven tone, and dullness, BioRePeel reveals a radiant and rejuvenated complexion.",
    image: "/images/all/web/Biorepeel.jpg",
  },
  microneedling: {
    title: "Microneedling",
    description:
      "Microneedling stimulates your skin’s natural healing process by creating tiny micro-injuries that encourage collagen and elastin production. This minimally invasive treatment enhances skin texture, improves elasticity, and reduces the appearance of scars and fine lines. ",
    additionalInfo:
      "With minimal discomfort and short recovery time, microneedling helps hydrate your skin and refine its tone, leaving it looking youthful and vibrant.",
    image: "/images/all/web/Microneedling.jpg",
  },
  mesotherapy: {
    title: "Mesotherapy",
    description:
      "Mesotherapy is a minimally invasive treatment that injects a customised blend of vitamins, antioxidants, and nutrients directly into your skin layers. This revitalising procedure enhances hydration, improves elasticity, and boosts skin firmness while restoring your natural glow. ",
    additionalInfo:
      "Perfect for dull, tired skin or fine lines, mesotherapy delivers noticeable results for a healthier, radiant complexion.",
    image: "/images/all/web/Mesotherapy.jpg",
  },
  profhilo: {
    title: "Profhilo",
    description:
      "Profhilo is an advanced skin booster designed to deeply hydrate, lift, and rejuvenate your skin. By stimulating collagen and elastin production, this quick and virtually painless treatment delivers long-lasting hydration and plumping effects. ",
    additionalInfo:
      "Over time, Profhilo visibly improves skin elasticity and smoothness, making it ideal for ageing skin, fine lines, and dehydration.",
    image: "/images/all/web/Profhilo.jpg",
  },
  // Add more services here...
};

export default function ServicePageDynamic({ params }: { params: { service: string } }) {
  const details = serviceDetails[params.service as keyof typeof serviceDetails];

  if (!details) {
    notFound(); // Handle 404 for invalid service names
  }

  return (
    <>
    <Header/>
    <Service
      title={details.title}
      description={details.description}
      additionalInfo={details.additionalInfo}
      image={details.image}
    />
    <Footer/>
    </>
  );
}
