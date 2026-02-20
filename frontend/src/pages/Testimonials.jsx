import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/testimonial/all`
        );

        if (!res.ok) throw new Error("Failed to fetch testimonials");

        const data = await res.json();

        const formatted = data.testimonials.map((t) => ({
          ...t,
          img: t.image
            ? `data:${t.image.contentType};base64,${t.image.data}`
            : null,
        }));

        setTestimonials(formatted);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("something went wrong,  try agian.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* HEADER BANNER */}
      <section className="relative w-full h-36 md:h-40 lg:h-64 overflow-hidden">
        <img
          src={banner}
          alt="Client Stories Banner"
          className="w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1 className="text-white text-2xl md:text-5xl font-bold tracking-wide text-center drop-shadow-xl">
            Client Story Gallery
          </h1>
          <p className="text-white text-sm md:text-lg text-center mt-2 md:mt-4 max-w-2xl drop-shadow-lg">
            Real transformation journeys that inspire and motivate.
          </p>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-green-700 font-medium text-lg">Loading stories...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-24 gap-3">
          <p className="text-red-500 font-medium text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Retry
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && testimonials.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24">
          <p className="text-gray-500 text-lg">Abhi koi stories available nahi hain.</p>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && testimonials.length > 0 && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
          {testimonials.map((item, i) => (
            <img
              key={i}
              src={item.img || "https://via.placeholder.com/300"}
              alt={item.title}
              onClick={() => setSelected(item)}
              className="w-full h-64 object-cover rounded-xl cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
            />
          ))}
        </div>
      )}

      {/* Popup / Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white p-6 rounded-xl max-w-lg w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-black transition"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <img
              src={selected.img}
              alt={selected.title}
              className="w-full rounded-lg mb-4 max-h-72 object-cover"
            />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {selected.title}
            </h3>
            <p className="text-gray-700">{selected.description}</p>

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