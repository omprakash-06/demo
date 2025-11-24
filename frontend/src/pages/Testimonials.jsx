import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [selected, setSelected] = useState(null); // selected testimonial object

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/testimonial/all`);
        const data = await res.json();

        // Convert Node.js Buffer to base64 for browser
        const formatted = data.map((t) => ({
          ...t,
          img: t.image
            ? `data:${t.image.contentType};base64,${btoa(
                new Uint8Array(t.image.data.data).reduce(
                  (acc, byte) => acc + String.fromCharCode(byte),
                  ""
                )
              )}`
            : null,
        }));

        setTestimonials(formatted);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-green-50 h-full py-16 px-6">
     <section
  className="relative py-20 px-6 md:px-20 text-center bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528')"
  }}
>
  {/* Light overlay for readability */}
  <div className="absolute inset-0 bg-black/70"></div>


  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-white mb-4">
      Client Story Gallery
    </h2>

    <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12 text-lg">
      Real transformation journeys that inspire and motivate.
    </p>
  </div>
</section>


      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <img
            key={i}
            src={item.img || "https://via.placeholder.com/300"}
            alt={item.title}
            onClick={() => setSelected(item)}
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-90 transition "
          />
        ))}
      </div>

      {/* Popup / Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white p-6 rounded-xl max-w-lg w-full text-center">
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-2xl font-bold"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            {/* Image */}
            <img src={selected.img} alt={selected.title} className="w-full rounded-lg mb-4" />

            {/* Title */}
            <h3 className="text-xl font-bold text-green-700 mb-2">{selected.title}</h3>

            {/* Description */}
            <p className="text-gray-700">{selected.description}</p>

            {/* CTA Button */}
            <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
            <button className="m-2 px-5 py-2 text-sm font-medium bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all">
              Book Appointment →
            </button>
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
}
