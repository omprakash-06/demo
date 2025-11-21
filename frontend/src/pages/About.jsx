import Counter from "../components/Counter";
import dr from "../assets/dr.png"
export default function About() {
  return (
    <div className="w-full bg-[#f7faf7] text-gray-800">

      {/* HEADER BANNER */}
      <section className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
          alt="Nutrition Banner"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center drop-shadow-xl">
            About Dr. Meeta Mishra
          </h1>
        </div>
      </section>

      {/* PROFESSIONAL JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-black text-3xl md:text-4xl font-bold text-center mb-16">
          Professional Journey
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://imgs.search.brave.com/WCuJHeNCloBh6l5BDPgO7R3H9wiAUyL0oG9zJAmg_4o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RiL2U4/L2MxL2RiZThjMTQz/ZGExM2EwMWZhMzUx/N2E2ZWUwZTQ3MjNm/LmpwZw"
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
              <strong>Dr. Meeta Mishra</strong> is a distinguished certified nutritionist
              with over <strong>17 years</strong> of experience in
              <strong> clinical, lifestyle, and sports nutrition</strong>.
              With an <strong>MSc in Food & Nutrition and a PhD in Nutrition</strong>,
              she combines scientific expertise with a compassionate, practical approach.
              <br /><br />
              She has contributed 8 years to clinical nutrition at Jubesta Hospital and
              <strong> 8 years</strong> as a sports nutrition consultant at Planet Gym.
              In 2017, she founded her own clinic at Vidya Protein World, Shankar Nagar,
              Raipur — now a trusted centre for personalized diet and wellness plans.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="w-full bg-gradient-to from-green-100 to-green-50 py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
            Mission Statement
          </h2>

          <div className="bg-white border-l-8 border-green-600 rounded-2xl shadow-lg p-10 md:p-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              “Helping individuals achieve lasting wellness through personalized,
              science-backed nutrition and holistic lifestyle guidance.”
            </p>
          </div>
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-14 text-center">
          Numbers That Define Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-200 text-center hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-green-700 mb-3">#1</h3>
            <p className="text-gray-700 font-medium">
              Dietitian & Sports Nutritionist <br /> in Raipur
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-200 text-center hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-green-700 mb-3">
              <Counter end={17} />+
            </h3>
            <p className="text-gray-700 font-medium">Years of Experience</p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-200 text-center hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-green-700 mb-3">
              <Counter end={1000} />+
            </h3>
            <p className="text-gray-700 font-medium">Success Stories</p>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="w-full bg-green-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
            Philosophy & Approach
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Dr. Meeta believes that true health transformation comes from a deep
            understanding of each individual and creating sustainable, practical
            lifestyle habits.
          </p>

          <ul className="space-y-5 text-gray-800 text-lg">
            <li className="flex gap-3 items-start"><span className="text-green-600 text-2xl">•</span>Understanding individual lifestyle and habits</li>
            <li className="flex gap-3 items-start"><span className="text-green-600 text-2xl">•</span>Creating sustainable, realistic diet plans</li>
            <li className="flex gap-3 items-start"><span className="text-green-600 text-2xl">•</span>Focusing on long-term wellness over quick fixes</li>
            <li className="flex gap-3 items-start"><span className="text-green-600 text-2xl">•</span>Integrating clinical knowledge with day-to-day nutrition</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mt-10">
            Her personalized plans emphasize <span className="font-semibold">balance</span>, 
            <span className="font-semibold">consistency</span>, and 
            <span className="font-semibold">nourishment</span>.
          </p>
        </div>
      </section>

      {/* SPECIALIZATION SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-green-800 mb-14 text-center">
            Expertise & Specializations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Weight Management",
              "Diabetes, thyroid, PCOD & lifestyle disorders",
              "Clinical nutrition consulting",
              "Sports & fitness nutrition",
              "Pregnancy & child nutrition",
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-green-800">{item}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
