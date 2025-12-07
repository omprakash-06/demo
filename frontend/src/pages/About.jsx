import Counter from "../components/Counter";
import dr from "../assets/dr.png"
export default function About() {
  return (
    <div className="w-full bg-green-100 text-gray-800">

      {/* HEADER BANNER */}
      <section className="relative w-full h-36 md:h-40 lg:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
          alt="Nutrition Banners"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-white text-2xl md:text-5xl font-bold tracking-wide text-center drop-shadow-xl">
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

      {/* MISSION & VISION SECTION */}
       <section className="w-full bg-green-50 py-20 px-6 md:px-16">
         <div className="flex flex-col md:flex-row gap-5 max-w-5xl mx-auto text-center space-y-20">

        {/* MISSION */}
          <div>
           <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8 tracking-tight">
            Our Mission
           </h2>

      <div className="bg-white border border-green-300 rounded-3xl shadow-xl p-10 md:p-12 relative">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
          “To transform lives by providing personalized, sustainable, and science-based 
          nutrition guidance that helps individuals achieve long-term health and wellness.”
        </p>
      </div>
    </div>

    {/* VISION */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8 tracking-tight">
        Our Vision
      </h2>

      <div className="bg-white border border-green-300 rounded-3xl shadow-xl p-10 md:p-12 relative">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
          “To create a healthier community where every individual has the knowledge, support, 
          and motivation to lead a balanced and nourishing lifestyle.”
        </p>
      </div>
    </div>

  </div>
       </section>


      {/* NUMBERS SECTION */}
      <section className="w-full bg-green-200 py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-14 text-center">
          Numbers That Define Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-200 text-center hover:shadow-md transition">
            <h3 className="text-5xl font-bold text-green-700 mb-3">1</h3>
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
<section className="bg-green-100 py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-14 text-center tracking-tight">
      Expertise & Specializations
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        { title: "Weight Management", icon: "⚖️" },
        { title: "Diabetes, Thyroid, PCOD & Lifestyle Disorders", icon: "🩺" },
        { title: "Clinical Nutrition Consulting", icon: "📋" },
        { title: "Sports & Fitness Nutrition", icon: "💪" },
        { title: "Pregnancy & Child Nutrition", icon: "🤰" },
        { title: "Therapeutic Diet Planning", icon: "🥗" },
      ].map((item, index) => (
        <div 
          key={index}
          className="bg-white/70 backdrop-blur-md p-7 rounded-2xl shadow-sm border border-green-200 
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          {/* ICON */}
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 
                          group-hover:bg-green-200 transition text-2xl">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="font-semibold text-xl text-green-900 leading-snug">
            {item.title}
          </h3>

          {/* UNDERLINE */}
          <div className="h-1 w-0 bg-green-600 mt-3 rounded-full group-hover:w-16 transition-all"></div>
        </div>
      ))}

    </div>

  </div>
</section>
      

    </div>
  );
}
