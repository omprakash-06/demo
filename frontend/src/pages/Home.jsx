import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import TrainingCard from "../components/TrainingCard";
import CertificateCard from "../components/CertificateCard";
import Certificate1 from "../assets/certificate1.jpg";
import Certificate2 from "../assets/certificate2.jpg";
import Certificate3 from "../assets/certificate3.jpg";
import Certificate4 from "../assets/certificate4.jpg";
import dr from "../assets/dr.jpg"
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
       <Hero/>

      {/* ABOUT */}
      
      {/* PROFESSIONAL JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 py-20  bg-[#f5f9f5]">
        <h1 className="text-black text-4xl md:text-4xl font-bold text-center mb-16">
          About Dr. Meeta Mishra 
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={dr}
              alt="Dr. Meeta"
              className="rounded-2xl shadow-xl w-80 md:w-96 object-cover ring-4 ring-green-200"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6 leading-snug">
              Certified Dietitian & Clinical Nutritionist
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>Dr. Meeta Mishra </strong>is known as <strong>Raipur’s No.1</strong> and most trusted personalized diet planner,
              helping people improve their health with practical and easy-to-follow nutrition guidance. 
              With more than <strong>17 years of experience</strong>, she has worked in clinical nutrition, lifestyle nutrition, 
              and sports nutrition. She holds an <strong> MSc in Food & Nutrition and a PhD in Nutrition</strong>,
              giving her a strong understanding of how food supports overall health.
              <strong>Dr. Mishra</strong> spent eight years at <strong>Jubesta Hospital</strong>, where she helped patients manage diabetes, 
              heart issues, obesity, and other health conditions through proper diet. She also worked for eight years as a sports nutrition consultant at Planet Gym, 
              creating diet plans that improved strength, stamina, and recovery for athletes and fitness enthusiasts.
              <strong>In 2017</strong>, <strong>Dr. Mishra started her own clinic at Vidya Protein World, Shankar Nagar, Raipur.</strong> 
              Today, her clinic is a trusted centre for weight loss, lifestyle improvement, healthy eating routines, 
              and overall wellness support. With more than  <strong>1,000</strong> happy clients, she is appreciated for her friendly approach, 
              clear communication, and personalized diet plans that fit easily into daily life.
              <strong> Dr. Meeta Mishra</strong> focuses on sustainable changes rather than quick fixes,
              helping people achieve better health, more energy, and long-term results through balanced nutrition and simple lifestyle habits.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-green-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
           Personalized Diet Plans & Nutrition Care 
          </h2>
          <div className="flex flex-col md:flex-row gap-4 overflow-x-auto no-scrollbar">
            {services.length === 0 ? (
              <p>Loading services...</p>
            ) : (
              services.slice(0, 3).map((service) => (
                <ServiceCard
                  key={service._id}
                  img={service.image || "https://via.placeholder.com/300"}
                  title={service.title}
                  desc={service.subtitle}
                />
              ))
            )}
          </div>
          
            
        </div>
      </section>

      {/* TRAINING */}
      <section className="py-14 bg-green-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Training & Wellness Sessions
          </h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {trainings.length === 0 ? (
              <p>Loading trainings...</p>
            ) : (
              trainings.slice(0, 3).map((t) => (
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
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-14 bg-green-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
           What Clients Say
          </h2>

          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            <TestimonialCard
              name="Arzoo Poonam"
              img="A"
              text="I really want to express my gratitude to dr.meeta mishra for helping me in my weight loss Journey.She is been perfect guide.Best nutritionist is City."
            />
            <TestimonialCard
              name="Amit Jain"
              img="A"
              text="Me and my spouse has lost 12kg and 5 kg with in given time duration.very nicely explained about each and every detail of our diet by mam"
            />
            <TestimonialCard
              name="Ravi jaiswal"
              img="R"
              text="Dr. Meeta Mishra is very Humble & caring. Good human being as well as indepth knowledge of Nutrition."
            />
            <TestimonialCard
              name="Monika Tiwari"
              img="M"
              text="She is a superb dietician … she is humble as well as a genuine dietician to which I have come across ❤"
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

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           <CertificateCard img={Certificate1} size="w-64 h-64 transform rotate-270 rounded-lg" />
           <CertificateCard img={Certificate3} size="w-64 h-64 transform rotate-270 rounded-lg" />
           <CertificateCard img={Certificate2} size="w-64 h-64 rounded-lg" />
           <CertificateCard img={Certificate4} size="w-64 h-64 rounded-lg" />
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
