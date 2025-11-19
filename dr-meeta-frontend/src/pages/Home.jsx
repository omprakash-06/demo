import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import TrainingCard from "../components/TrainingCard";
import CertificateCard from "../components/CertificateCard";
import Certificate1 from "../assets/certificate1.jpg";
import Certificate2 from "../assets/certificate2.jpg";
import Certificate3 from "../assets/certificate3.jpg";
import Certificate4 from "../assets/certificate4.jpg";
import dr from "../assets/dr.png"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-[#f5f9f5]">

      {/* HERO */}
      <Hero />
      {/* MAIN ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://imgs.search.brave.com/WCuJHeNCloBh6l5BDPgO7R3H9wiAUyL0oG9zJAmg_4o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RiL2U4/L2MxL2RiZThjMTQz/ZGExM2EwMWZhMzUx/N2E2ZWUwZTQ3MjNm/LmpwZw"
              alt="Dr. Meeta"
              className="rounded-2xl shadow-lg w-80 md:w-96 object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Meet Dr. Meeta Mishra
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Meeta Mishra is a certified Nutritionist (PhD in Nutrition & MSc Food Science) with <strong>17+ years</strong> of experience in clinical, sports, and lifestyle nutrition. She has helped more than <strong>1000+</strong>individuals transform their health through balanced, customized diet plans.
            </p>
            <Link to="/about">
            <button href="/about" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition m-6">
              Know More →
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-[#f5f9f5]">
        <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <ServiceCard 
           img="https://imgs.search.brave.com/3OwyFqv1As7b0rbl5pWuBN2LQZJjngRatH-rFwlG9Pw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzI4LzYxLzcz/LzM2MF9GXzEyODYx/NzM1NF9rNFlqVWda/a2JGSkJRV1A2WU1q/THFQNUs0dzR4UGtR/ei5qcGc"
           title="Weight Management Programs "
           desc="Healthy, sustainable weight loss and weight control plans."
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/ATU93Ofj2jF-c8dSnVSieNYz-iph5qlayO-Ve8CwyRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMzVv/ZW55enAzNTMyMS5j/bG91ZGZyb250Lm5l/dC9tZWRpdW1fZGlh/YmV0ZXNfYW5kX3Nl/eHVhbF9oZWFsdGhf/aW5fbWVuXzU0MWYz/NTQ2ZTAuanBn"
           title="Diabetes & Lifestyle Nutrition "
           desc="Diet plans that support sugar control and improve daily energy."
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/ZpMMnFMN7ioxKt7FAD29JDtd1XLLQ9iu0ffytqHYEqk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MzE2MjQxNy9waG90/by9mcmllbmRseS1u/dXRyaXRpb25pc3Qt/Z2l2aW5nLWNvbnN1/bHRhdGlvbi10by1w/YXRpZW50LWFib3V0/LWhlYWx0aHktZmVl/ZGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9QWQ2VEJx/WXNwRW1Vb1pPR2RE/RG10ZzJOdFc1RnJR/UkFucDVmUUNLOVN0/VT0"
           title="Clinical Nutrition "
           desc="Guidance for thyroid, PCOD, hypertension & digestive issues."
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/1KmdN2o9JQp1ArdnTsJL9VefFJkk4RQ5q9IcwkpOrnc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MjE2Nzk2Ny9waG90/by9zcG9ydHMtbWVk/aWMtdGFraW5nLWFj/dGlvbi1vbi1hbi1h/dGhsZXRlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz04X0JB/SjNIRFRxbll2X0ZD/ODUzMi1DLVN4eXc2/SGNmMnlXcjVnX3I2/QWg4PQ"
           title="	Sports & Fitness Nutrition "
           desc="Performance-focused diets for gym-goers & athletes."
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/doQSVeWgeAMNfo3Bq32PyfwvoO0o6VlRl5ANseJBFdk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXBvbGxvY3JhZGxl/LmNvbS9iYWNrZW5k/L3dlYi9ibG9nLWlt/YWdlcy8xNzI1NDMw/NjgzcHJlZ25hbnQt/c21pbGluZy13b21h/bi1lYXRpbmctc2Fs/YWQuanBn"
           title="Pregnancy & Child Nutrition "
           desc="Special diets for expecting mothers & growing children."
          />
        </div>
        <Link to="/services">
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition m-6">
            View All Services →
          </button>
          </Link>
        </div>
      </section>
      {/* TRAINING & WORKSHOPS */}
      <section className="py-14 bg-[#f7faf7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Training & Wellness Sessions
          </h2>

          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            <TrainingCard
              img="https://imgs.search.brave.com/KJ4qHVxQvCv0MADWWkbfX7URfap4V-5y1qaqSZzmwuY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm9w/ZWxwaHlzaW90aGVy/YXB5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOC9u/dXRyaXRpb24td29y/a3Nob3AtZW1wbG95/ZWUtd2VsbG5lc3Mt/d29ya3Nob3BzLXBy/b3BlbC1waHlzaW90/aGVyYXB5LmpwZw"
              bg="bg-green-100"
              title="Corporate Wellness Programs"
              subtitle="Training for office teams"
            />

            <TrainingCard
              img="https://imgs.search.brave.com/dMsd9RFW6N-yVIssOeAowa3ETcVP81T5nRWuv4--I7Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dWRlbC5lZHUvY29u/dGVudC9kYW0vdWRl/bEltYWdlcy9zdHVk/ZW50LWxpZmUvaGVh/bHRoLXdlbGxiZWlu/Zy9oZXJvLWltYWdl/cy9STEgtU3ByaW5n/X0ludG9fU3VjY2Vz/cy0wMjAzMjMtMTE1/X1VEYWlseV8tX0hl/cm9fMTI4MHg1MzQu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs"
              bg="bg-orange-100"
              title="School & College Awareness Sessions"
              subtitle="Child & youth nutrition"
            />

            <TrainingCard
              img="https://imgs.search.brave.com/UNQTC3tspPflMXO_olj8KYZLFSgOe0ZvWWMaRgtUe68/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb3Zp/bmdsaWZlY28uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA0L2VtcGxveWVl/cy1hdC1hLWNvbXBh/bnktY29uZmVyZW5j/ZS0zNjB4MTgwLmpw/Zw"
              bg="bg-blue-100"
              title="Public Nutrition Seminars"
              subtitle="Community health events"
            />
            <TrainingCard
              img="https://imgs.search.brave.com/ZEkZkaQHXYuQ_NDAoojMKs4xb2gZo5olnyNSdMoWw-k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/NDBkNDY4NTU3Mjk1/MzJkNGJjY2VkYy9h/YTQxODJiYS02Yzg5/LTRlOTctYmJhMC1l/ZDUwOTczNzYxZDEv/Mi5qcGc"
              bg="bg-red-100"
              title="Health Workshops for Dietitians"
              subtitle="Dietitians health Workshops events"
            />
          </div>
          <Link to="/training">
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition m-6">
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
