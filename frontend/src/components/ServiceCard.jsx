import { Link } from "react-router-dom";
export default function ServiceCard({ img, title, desc }) {
  return (
    <div className="flex-shrink-0 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
      {/* Large Rectangle Image */}
      <div className="w-full h-40">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="py-6 px-4 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {desc}
        </p>
        <Link to="/services">
        <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded-lg text-sm">
          Learn More
        </button>
        </Link>
      </div>
      
    </div>
  );
}
