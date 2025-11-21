import { useState, useEffect } from "react";
import TrainingCard from "../components/TrainingCardV2";

function Training() {
  const [trainings, setTrainings] = useState([]);
  const BACKEND = import.meta.env.VITE_BACKEND_URL;

 const fetchTrainings = async () => {
  try {
    const res = await fetch(`${BACKEND}/training/all`);
    const data = await res.json();

    const trainingsWithImages = data.map((t) => ({
      ...t,
      image: t.image
        ? `data:${t.image.contentType};base64,${btoa(
            new Uint8Array(t.image.data.data).reduce(
              (acc, byte) => acc + String.fromCharCode(byte),
              ""
            )
          )}`
        : null,
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
      <section className="py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Training & Workshop Programs
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
          Showcase of all available nutrition training sessions conducted by{" "}
          <span className="font-semibold">Dr. Meeta Mishra</span>.
        </p>
        <h1 className="text-3xl font-bold text-black mt-8">Available Training Programs</h1>
      </section>

      {/* TRAINING CARDS */}
      <section className="py-14 px-6 md:px-20 max-w-4xl mx-auto flex flex-col gap-10">
        {trainings.length === 0 ? (
          <p className="text-center text-gray-500">No training programs available.</p>
        ) : (
          trainings.map((t) => (
            <TrainingCard
              key={t._id}
              img={t.image}
              title={t.title}
              subtitle={t.subtitle}
              description={t.description}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default Training;
