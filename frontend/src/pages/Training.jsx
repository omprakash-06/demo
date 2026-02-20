import { useState, useEffect } from "react";
import TrainingCard from "../components/TrainingCardV2";
import Brand from "../components/BrandSlider";
import banner from "../assets/banner.jpg";

function Training() {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BACKEND = import.meta.env.VITE_BACKEND_URL;

  const fetchTrainings = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${BACKEND}/training/all`);
      if (!res.ok) throw new Error("Failed to fetch trainings");

      const data = await res.json();

      const trainingsWithImages = data.map((t) => ({
        ...t,
        images: t.images
          ? t.images.map(
              (img) =>
                `data:${img.contentType};base64,${btoa(
                  new Uint8Array(img.data.data).reduce(
                    (acc, byte) => acc + String.fromCharCode(byte),
                    ""
                  )
                )}`
            )
          : [],
      }));

      setTrainings(trainingsWithImages);
    } catch (err) {
      console.error("Error fetching trainings:", err);
      setError("some thing went wrong, try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <div className="bg-green-200">
      {/* HEADER BANNER */}
      <section className="relative w-full h-36 md:h-40 lg:h-64 overflow-hidden">
        <img
          src={banner}
          alt="Training Banner"
          className="w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1 className="text-white text-2xl md:text-5xl font-bold tracking-wide text-center drop-shadow-xl">
            Training & Workshop Programs
          </h1>
          <p className="text-white text-sm md:text-lg text-center mt-2 md:mt-4 max-w-2xl drop-shadow-lg">
            Showcase of all available nutrition training sessions conducted by{" "}
            <span className="font-semibold">Dr. Meeta Mishra</span>.
          </p>
        </div>
      </section>

      {/* SECTION HEADING */}
      <section className="py-10 px-6 text-center bg-green-100">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          Available Training Programs
        </h2>
      </section>

      {/* TRAINING CARDS */}
      <section className="py-14 px-6 md:px-20 max-w-6xl mx-auto overflow-x-auto no-scrollbar">

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-green-800 font-medium text-lg">Loading programs...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <p className="text-red-500 font-medium text-lg">{error}</p>
            <button
              onClick={fetchTrainings}
              className="px-5 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && trainings.length === 0 && (
          <p className="text-center text-gray-500">
            No training programs available.
          </p>
        )}

        {/* Cards */}
        {!loading && !error && trainings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {trainings.map((t) => (
              <TrainingCard
                key={t._id}
                images={t.images}
                title={t.title}
                subtitle={t.subtitle}
                description={t.description}
              />
            ))}
          </div>
        )}
      </section>

      <Brand />
    </div>
  );
}

export default Training;