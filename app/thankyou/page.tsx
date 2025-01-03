
import Header from "../components/Header";
import Footer from "../components/Footer";

const thankyou = () => {
    return (
      <>
      <Header/>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Thank You!</h1>
        <p className="text-gray-600 mb-8">
          Your message has been successfully sent. We will get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-300"
        >
          Back to Home
        </a>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default thankyou;
  