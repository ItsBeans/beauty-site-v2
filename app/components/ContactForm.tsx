import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl text-center mb-4">Contact Form</h2>
      <p className="text-center text-gray-600 mb-8">
        If you prefer, fill out the form below, and we’ll respond to your inquiry as soon as possible:
      </p>
      <form
        action="https://formsubmit.co/bennyrocys@gmail.com"
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" /> {/* Disable CAPTCHA */}
        <input type="hidden" name="_next" value="http://localhost:3000/thankyou" /> {/* Redirect URL */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#C59C5D] text-gray-800 px-2 py-1"
              placeholder="Your Name"
              required
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#C59C5D] text-gray-800 px-2 py-1"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-gray-600 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-[#C59C5D] text-gray-800 px-2 py-1 h-32 resize-none"
            placeholder="Write your message here"
            required
          />
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-b from-[#C59C5D] to-[#D3B078] hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
