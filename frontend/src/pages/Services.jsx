
import ServiceCard from "../components/ServicesCard";
import { useState,useEffect } from "react";
function Services() {
  const [services, setServices] = useState([]);
  
    // Fetch services from backend
    const fetchServices = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/service/all`);
        const data = await res.json();
        if (res.ok) setServices(data.services);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };
  
    useEffect(() => {
      fetchServices();
    }, []);
  return (
    <div className="w-full  bg-[#f5f9f5]">
            {/* HEADER BANNER */}
      <section className="relative w-full h-36 md:h-40 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
          alt="Nutrition Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-7 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center drop-shadow-xl">
            Our Services
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className=" mt-10px py-14 shadow-xl">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className=" md:text-xl font-bold text-gray-700 mb-3 text-3xl">
            Our Nutrition & Diet Services
          </h3>

          <p className="text-gray-600 leading-relaxed text-2xl">
            Explore personalized, science-backed nutrition programs designed to support your health goals.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-14 bg-[#f5f9f5]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length === 0 ? (
                      <p>Loading services...</p>
                    ) : (
                      services.map((service) => (
                      <ServiceCard
                      key={service._id}
                      img={service.image || "https://via.placeholder.com/300"} 
                      title={service.title}
                      desc={service.description}
                      
                      />
                     ))
                     )}
        </div>
      </section>
    </div>
  );
}

export default Services;
