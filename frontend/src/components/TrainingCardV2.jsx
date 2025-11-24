import { Link } from "react-router-dom";
export default function TrainingCard({ img, title, subtitle, description }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md mb-8">
      
      {/* Large Image */}
      <div className="w-full h-64">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="font-semibold text-2xl text-gray-900 mb-2">{title}</h3>
        <p className="text-green-700 font-medium mb-2">{subtitle}</p>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
      
      {/* CTA Button */}
        <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
        <button className="mt-2 px-5 py-2 text-sm font-medium bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all">
          Book Appointment →
        </button>
        </Link>

    </div>
  );
}
