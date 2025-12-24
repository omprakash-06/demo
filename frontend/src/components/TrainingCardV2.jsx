import { Link } from "react-router-dom";

export default function TrainingCardV2({ images = [], title, subtitle, description }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md bg-white">

      {/* MULTIPLE IMAGES SCROLL */}
      <div className="flex overflow-x-auto no-scrollbar h-64">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={title}
            className="min-w-full h-full object-cover"
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="font-semibold text-2xl text-gray-900 mb-2">{title}</h3>
        <p className="text-green-700 font-medium mb-2">{subtitle}</p>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* CTA */}
      <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
        <button className="m-4 px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
          Book Appointment →
        </button>
      </Link>
    </div>
  );
}
