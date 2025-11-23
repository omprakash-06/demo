export default function TestimonialCard({ name, text, img }) {
  return (
    <div className="bg-[#f7efe4] p-5 rounded-2xl shadow-sm min-w-[260px] max-w-[260px] border border-[#e8ddcf]">

      {/* TOP SECTION: IMAGE + NAME + STARS */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={img}
          alt={title}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800 text-sm">{name}</h3>

          {/* Stars */}
          <div className="text-yellow-500 text-xs">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>

      {/* TEXT */}
      <p className="text-gray-600 text-sm leading-relaxed">
        "{text}"
      </p>
    </div>
  );
}
