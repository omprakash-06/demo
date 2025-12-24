import { useState, useEffect } from "react";
import TrainingCard from "../components/TrainingCard";
import Brand from "../components/BrandSlider";

function Training() {
  const [trainings, setTrainings] = useState([]);
  const BACKEND = import.meta.env.VITE_BACKEND_URL;

  // Fetch training data from backend
  const fetchTrainings = async () => {
    try {
      const res = await fetch(`${BACKEND}/training/all`);
      const data = await res.json();

      // Map images to base64 strings
      const trainingsWithImages = data.map((t) => ({
        ...t,
        images: t.images?.map(
          (img) =>
            `data:${img.contentType};base64,${btoa(
              new Uint8Array(img.data.data).reduce(
                (acc, byte) => acc + String.fromCharCode(byte),
                ""
              )
            )}`
        ) || [],
      }));

      setTrainings(trainingsWithImages);
    } catch (err) {
      console.error("Error fetching trainings:", err);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <div className="w-full bg-[#f7faf7]">

      {/* HERO SECTION */}
      <section
        className="relative py-20 px-6 md:px-20 text-center bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Training & Workshop Programs
          </h1>

          <p className="text-white max-w-2xl mx-auto leading-relaxed text-lg">
            Showcase of all available nutrition training sessions conducted by{" "}
            <span className="font-semibold">Dr. Meeta Mishra</span>.
          </p>

          <h1 className="text-2xl font-bold text-white mt-8">
            Available Training Programs
          </h1>
        </div>
      </section>

      {/* TRAINING CARDS */}
      <section className="py-14 px-6 md:px-20 max-w-6xl mx-auto overflow-x-auto no-scrollbar">
        {trainings.length === 0 ? (
          <p className="text-center text-gray-500">
            No training programs available.
          </p>
        ) : (
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

      {/* BRAND SLIDER */}
      <Brand />
    </div>
  );
}

export default Training;
