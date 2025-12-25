import { Link } from "react-router-dom";  
import bg from "../assets/bg.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center overflow-hidden"
    >
      {/* RESPONSIVE BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
  
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* CONTENT */}
      <div className="relative text-white pl-6 md:pl-20 z-10"> 
        {/* Main Heading */}
        <h1 className="text-4xl text-center md:text-6xl font-bold leading-tight max-w-2xl">
          Eat Right.<br />
          Live Bright.  
        </h1>
        
        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
            <button className="bg-green-600 text-white md:px-6 md:py-3 p-1 rounded-md font-semibold shadow hover:bg-green-700 transition">
              Book Consultation
            </button>
          </Link>
          <Link to="/services">
            <button className="bg-blue-600 text-white md:px-6 md:py-3 p-1 rounded-lg font-medium shadow hover:bg-blue-700 transition">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
