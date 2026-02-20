import { useState } from "react";
import banner from "../assets/banner.jpg";
import office from "../assets/office.jpg";

export default function Contact() {
  const [enquiry, setEnquiry] = useState("");

  const handleWhatsapp = () => {
    if (!enquiry) {
      alert("Please select an enquiry type");
      return;
    }
    const message = `Hello mam, I want to inquire about ${enquiry}.`;
    const whatsappNumber = "919589345938";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER / BANNER */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={banner}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Get in Touch</h2>
        <p className="text-gray-600">
          Get in touch for consultations, training sessions, or general
          enquiries.
        </p>
      </div>

      {/* TWO COLUMN LAYOUT */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Contact Details
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">
                    📍 <strong>Address:</strong> In Front of Indian Chilly,
                    Vidya's Protein World, Shankar Nagar, Raipur, Chhattisgarh
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">
                    📞 <strong>Phone / WhatsApp:</strong> 8982627838, 9589345938
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <img
                src={office}
                alt="Office"
                className="w-full rounded-lg shadow"
              />
            </div>
          </div>

          {/* RIGHT SIDE – WHATSAPP ENQUIRY - ENHANCED */}
          <div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white sticky top-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Quick Enquiry</h3>
                <p className="text-green-100">
                  Choose your enquiry type and connect instantly via WhatsApp
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-green-50">
                    Select Enquiry Type
                  </label>
                  <select
                    value={enquiry}
                    onChange={(e) => setEnquiry(e.target.value)}
                    className="w-full bg-white/95 text-gray-800 border-2 border-white/30 rounded-xl p-4 focus:ring-4 focus:ring-white/40 outline-none transition-all font-medium appearance-none cursor-pointer hover:bg-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23059669'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "3rem",
                    }}
                  >
                    <option value="">Select Enquiry Type</option>
                    <option value="Diet Consultation">Diet Consultation</option>
                    <option value="Training / Workshop">
                      Training / Workshop
                    </option>
                    <option value="Corporate Session">Corporate Session</option>
                    <option value="Guest Speaker Invitation">
                      Guest Speaker Invitation
                    </option>
                  </select>
                </div>

                <button
                  onClick={handleWhatsapp}
                  className="w-full bg-white text-green-600 font-bold py-4 px-6 rounded-xl hover:bg-green-50 transform hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <svg
                    className="w-6 h-6 group-hover:rotate-12 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-lg">Connect on WhatsApp</span>
                </button>

                <p className="text-center text-sm text-green-100 mt-4">
                  We typically respond within minutes! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.345!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzA1LjAiTiA4McKwMzcnNDYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}