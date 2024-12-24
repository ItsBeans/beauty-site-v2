import Link from "next/link";

export default function AboutCallToAction() {
    return (
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl  mb-6">
            Choosing me as your beauty therapist is a privilege I deeply value.
          </h2>
  
          {/* Button */}
          <button className="px-6 py-3 text-white rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-200">
  <Link href="https://book.squareup.com/appointments/zq6ezov0waavbb/location/L13XT9086KZBG/services">
    Book Appointment Now
  </Link>
</button>
        </div>
      </section>
    );
  }
  