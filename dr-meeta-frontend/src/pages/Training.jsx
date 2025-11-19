import TrainingCard from "../components/TrainingCardV2";

function Training() {
  return (
    <div className="w-full bg-[#f7faf7]">

      {/* HERO SECTION */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Training & Workshop Programs
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg">
          Showcase of all available nutrition training sessions conducted by  <span className="font-semibold">Dr. Meeta Mishra</span>.
        </p>

        <h1 className="text-3xl font-bold text-black mt-8">Available Training Programs</h1>
      </section>

      {/* TRAINING CARDS */}
      <section className="py-14 px-6 md:px-20 max-w-4xl mx-auto flex flex-col gap-10">
        
        <TrainingCard
          img="https://imgs.search.brave.com/KJ4qHVxQvCv0MADWWkbfX7URfap4V-5y1qaqSZzmwuY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm9w/ZWxwaHlzaW90aGVy/YXB5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOC9u/dXRyaXRpb24td29y/a3Nob3AtZW1wbG95/ZWUtd2VsbG5lc3Mt/d29ya3Nob3BzLXBy/b3BlbC1waHlzaW90/aGVyYXB5LmpwZw"
          title="Corporate Wellness Programs"
          subtitle="Training for office teams"
          description="Custom wellness workshops for corporate teams focusing on healthy eating, stress management, and creating productive, health-conscious work environments."
        />

        <TrainingCard
          img="https://imgs.search.brave.com/dMsd9RFW6N-yVIssOeAowa3ETcVP81T5nRWuv4--I7Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dWRlbC5lZHUvY29u/dGVudC9kYW0vdWRl/bEltYWdlcy9zdHVk/ZW50LWxpZmUvaGVh/bHRoLXdlbGxiZWlu/Zy9oZXJvLWltYWdl/cy9STEgtU3ByaW5n/X0ludG9fU3VjY2Vz/cy0wMjAzMjMtMTE1/X1VEYWlseV8tX0hl/cm9fMTI4MHg1MzQu/anBnL19qY3JfY29u/dGVudC9yZW5kaXRp/b25zL29yaWdpbmFs"
          title="School & College Sessions"
          subtitle="Child & youth nutrition"
          description="Engaging nutrition sessions for students to educate them on balanced diets, healthy lifestyle habits, and mindful eating practices from a young age."
        />

        <TrainingCard
          img="https://imgs.search.brave.com/UNQTC3tspPflMXO_olj8KYZLFSgOe0ZvWWMaRgtUe68/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb3Zp/bmdsaWZlY28uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA0L2VtcGxveWVl/cy1hdC1hLWNvbXBh/bnktY29uZmVyZW5j/ZS0zNjB4MTgwLmpw/Zw"
          title="Public Awareness Seminars"
          subtitle="Community health events"
          description="Nutrition and wellness seminars for communities, designed to spread awareness about healthy eating, lifestyle choices, and disease prevention."
        />

      </section>

    </div>
  );
}

export default Training;
