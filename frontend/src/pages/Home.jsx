import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import TrainingCard from "../components/TrainingCard";
import CertificateCard from "../components/CertificateCard";
import Certificate1 from "../assets/certificate1.jpg";
import Certificate2 from "../assets/certificate2.jpg";
import Certificate3 from "../assets/certificate3.jpg";
import Certificate4 from "../assets/certificate4.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [services, setServices] = useState([]);
  const [trainings, setTrainings] = useState([]);

  // Fetch services
  const fetchServices = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/service/all`);
      const data = await res.json();
      if (res.ok) setServices(data.services || []);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  // Fetch trainings
  const fetchTrainings = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/training/all`);
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
    fetchServices();
    fetchTrainings();
  }, []);

  return (
    <div className="w-full bg-[#f5f9f5]">
      {/* HERO */}
      

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Hero/>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-[#f5f9f5]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            All Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.length === 0 ? (
              <p>Loading services...</p>
            ) : (
              services.map((service) => (
                <ServiceCard
                  key={service._id}
                  img={service.image || "https://via.placeholder.com/300"}
                  title={service.title}
                  desc={service.subtitle}
                />
              ))
            )}
          </div>
          <Link to="/services">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition">
              View All Services →
            </button>
          </Link>
        </div>
      </section>

      {/* TRAINING */}
      <section className="py-14 bg-[#f7faf7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Training & Wellness Sessions
          </h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {trainings.length === 0 ? (
              <p>Loading trainings...</p>
            ) : (
              trainings.map((t) => (
                <TrainingCard
                  key={t._id}
                  img={t.image}
                  title={t.title}
                  subtitle={t.subtitle}
                  bg="bg-green-100"
                />
              ))
            )}
          </div>
          <Link to="/training">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition">
              View Training Programs →
            </button>
          </Link>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
           What Clients Say
          </h2>

          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            <TestimonialCard
              name="Ananya Sharma"
              img="https://i.pravatar.cc/150?img=32"
              text="Weight management became easy with Dr Meeta!"
            />
            <TestimonialCard
              name="Ameya Sharra"
              img="https://i.pravatar.cc/150?img=12"
              text="Her diet plan improved my energy & lifestyle!"
            />
            <TestimonialCard
              name="Anusha Verma"
              img="https://i.pravatar.cc/150?img=47"
              text="Very scientific and professional approach!"
            />
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-14 bg-[#e7f2e7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Recognitions & Achievements
          </h2>

         <div className="flex flex-col md:flex-row  gap-6  no-scrollbar">
           <CertificateCard  img={Certificate1}    size="w-64 h-64 transform   rotate-270 rounded-lg"/>
           <CertificateCard   img={Certificate3}   size="w-64 h-64  transform  rotate-270 rounded-lg"/>
           <CertificateCard   img={Certificate2}   size="w-64 h-64 rounded-lg"/>
           <CertificateCard   img={Certificate4}   size="w-64 h-64 rounded-lg" />
        </div>

        </div>
      </section>

  <section className="relative py-14 bg-center bg-cover bg-no-repeat"
       style={{
          backgroundImage:
           "url('https://imgs.search.brave.com/0CjdpBVIqGgF0yiNI-LsFTEGX5M4gw5ThqLiJ-xo6T8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMi8xMi9IZWFs/dGh5LWJhbGFuY2Vk/LWRpZXQtMTNiM2Ex/MC5qcGc_cXVhbGl0/eT05MCZmaXQ9NzAw/LDM1MA')"
         }}
      >
  <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="relative max-w-6xl mx-auto px-6">
       <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Ready to Start Your Health Journey?
       </h2>
      <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition">
       Book Consultation →
      </button>
      </Link>
    </div>
  </section>
      
    </div>
  );
}
