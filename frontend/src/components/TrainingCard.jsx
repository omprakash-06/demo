import { Link } from "react-router-dom";
export default function TrainingCard({ img, bg, title, subtitle }) {
  return (
    <div
      className={`min-w-[300px] rounded-2xl overflow-hidden shadow-md ${bg}`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-base">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
        <Link to="/training">
        <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded-lg text-sm">
          Learn More
        </button>
        </Link>
      </div>
    </div>
  );
}
