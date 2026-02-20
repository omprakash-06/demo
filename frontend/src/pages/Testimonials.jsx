import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTestimonials();
  }, [currentPage]);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/testimonial/all?page=${currentPage}`
      );

      const data = await res.json();

      const formatted = data.testimonials.map((t) => ({
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
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    }
  };

  return (
    <div className="bg-green-50 min-h-screen">
      
      {/* HEADER */}
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

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {testimonials.map((item) => (
          <img
            key={item._id}
            src={item.img || "https://via.placeholder.com/300"}
            alt={item.title}
            onClick={() => setSelected(item)}
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 pb-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* POPUP */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white p-6 rounded-xl max-w-lg w-full text-center">
            <button
              className="absolute top-2 right-3 text-2xl font-bold"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <img
              src={selected.img}
              alt={selected.title}
              className="w-full rounded-lg mb-4"
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