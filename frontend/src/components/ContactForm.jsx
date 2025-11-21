export default function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>

      <form className="flex flex-col gap-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
