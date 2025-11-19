import Hero from "../components/Hero";
import ServiceCard from "../components/ServicesCard";

function Services() {
  return (
    <div className="w-full  bg-[#f5f9f5]">
      {/* INTRO SECTION */}
      <section className=" mt-10px py-14 shadow-xl">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Services
          </h2>

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
          
          <ServiceCard 
           img="https://imgs.search.brave.com/3OwyFqv1As7b0rbl5pWuBN2LQZJjngRatH-rFwlG9Pw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzI4LzYxLzcz/LzM2MF9GXzEyODYx/NzM1NF9rNFlqVWda/a2JGSkJRV1A2WU1q/THFQNUs0dzR4UGtR/ei5qcGc"
           title="Weight Loss Program"
           desc="Personalized plans for healthy, sustainable weight loss or weight gain. "
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/ATU93Ofj2jF-c8dSnVSieNYz-iph5qlayO-Ve8CwyRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMzVv/ZW55enAzNTMyMS5j/bG91ZGZyb250Lm5l/dC9tZWRpdW1fZGlh/YmV0ZXNfYW5kX3Nl/eHVhbF9oZWFsdGhf/aW5fbWVuXzU0MWYz/NTQ2ZTAuanBn"
           title="Diabetes & Lifestyle Management"
           desc="Balanced diet plans to control sugar levels and boost daily energy"
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/ZpMMnFMN7ioxKt7FAD29JDtd1XLLQ9iu0ffytqHYEqk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MzE2MjQxNy9waG90/by9mcmllbmRseS1u/dXRyaXRpb25pc3Qt/Z2l2aW5nLWNvbnN1/bHRhdGlvbi10by1w/YXRpZW50LWFib3V0/LWhlYWx0aHktZmVl/ZGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9QWQ2VEJx/WXNwRW1Vb1pPR2RE/RG10ZzJOdFc1RnJR/UkFucDVmUUNLOVN0/VT0"
           title="Clinical Nutrition Consulting"
           desc="Expert dietary guidance for thyroid, PCOD, hypertension, digestive health, and lifestyle disorders."
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/1KmdN2o9JQp1ArdnTsJL9VefFJkk4RQ5q9IcwkpOrnc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MjE2Nzk2Ny9waG90/by9zcG9ydHMtbWVk/aWMtdGFraW5nLWFj/dGlvbi1vbi1hbi1h/dGhsZXRlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz04X0JB/SjNIRFRxbll2X0ZD/ODUzMi1DLVN4eXc2/SGNmMnlXcjVnX3I2/QWg4PQ"
           title="Sports & Fitness Nutrition"
           desc="Nutrition strategies to enhance performance, stamina, and muscle recovery. "
          />

          <ServiceCard 
           img="https://imgs.search.brave.com/KJ4qHVxQvCv0MADWWkbfX7URfap4V-5y1qaqSZzmwuY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm9w/ZWxwaHlzaW90aGVy/YXB5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOC9u/dXRyaXRpb24td29y/a3Nob3AtZW1wbG95/ZWUtd2VsbG5lc3Mt/d29ya3Nob3BzLXBy/b3BlbC1waHlzaW90/aGVyYXB5LmpwZw"
           title="Corporate Wellness Programs"
           desc="Workplace nutrition sessions to build healthier, more productive teams."
          />

           <ServiceCard 
              img="https://imgs.search.brave.com/dMsd9RFW6N-yVIssOeAowa3ETcVP81T5nRWuv4--I7Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dWRlbC5lZHUvY29u/dGVudC9kYW0vdWRl/bEltYWdlcy9zdHVk/ZW50LWxpZmUvaGVh/bHRoLXdlbGxiZWlu/Zy9oZXJvLWltYWdl/cy9STEgtU3ByaW5n/X0ludG9fU3VjY2Vz/cy0wMjAzMjMtMTE1/X1VEYWlseV8tX0hl/cm9fMTI4MHg1MzQu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs"
           title="School & College Awareness Sessions"
           desc="Engaging sessions promoting healthy habits among students."
          />

          <ServiceCard 
              img="https://imgs.search.brave.com/ZEkZkaQHXYuQ_NDAoojMKs4xb2gZo5olnyNSdMoWw-k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/NDBkNDY4NTU3Mjk1/MzJkNGJjY2VkYy9h/YTQxODJiYS02Yzg5/LTRlOTctYmJhMC1l/ZDUwOTczNzYxZDEv/Mi5qcGc"
           title="Dietitian & Health Workshops"
           desc="Skill-building workshops for aspiring nutritionists and health professionals."
          />
          <ServiceCard 
              img="https://imgs.search.brave.com/UNQTC3tspPflMXO_olj8KYZLFSgOe0ZvWWMaRgtUe68/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb3Zp/bmdsaWZlY28uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA0L2VtcGxveWVl/cy1hdC1hLWNvbXBh/bnktY29uZmVyZW5j/ZS0zNjB4MTgwLmpw/Zw"
           title="Public Health & Nutrition Seminars"
           desc="Community-focused seminars on balanced diets and preventive nutrition."
          />
          

        </div>
      </section>
    </div>
  );
}

export default Services;
