import { Link } from "react-router-dom";  
import bg from "../assets/bg.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[50vh] md:h-[60vh] lg:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* RESPONSIVE BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
  
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* CONTENT */}
      <div className="relative text-white text-center z-10 px-4"> 
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl mx-auto">
          Eat Right.<br />
          Live Bright.  
        </h1>
        
        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-green-700 transition w-full sm:w-auto">
              Book Consultation
            </button>
          </Link>
          <Link to="/services">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition w-full sm:w-auto">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}