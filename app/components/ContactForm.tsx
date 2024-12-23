import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl text-center mb-4">Contact Form</h2>
      <p className="text-center text-gray-600 mb-8">
        If you prefer, fill out the form below, and we’ll respond to your inquiry as soon as possible:
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
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
