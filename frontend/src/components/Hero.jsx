import { Link } from "react-router-dom";  
import bg from "../assets/bg.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* CONTENT */}
      <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 w-full max-w-7xl mx-auto"> 
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-2xl">
          Eat Right.<br />
          Live Bright.  
        </h1>
        
        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
            <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-green-700 transition-colors">
              Book Consultation
            </button>
          </Link>
          <Link to="/services">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
