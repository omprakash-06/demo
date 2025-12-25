import { useState, useEffect, useRef } from "react";

export default function TrainingCardV2({ images = [], title, subtitle, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll effect - sirf jab autoPlay true ho
  useEffect(() => {
    if (images.length <= 1 || !autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, autoPlay]);

  // Scroll to current image
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md bg-white">
      {/* IMAGE CAROUSEL */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden h-64 scroll-smooth cursor-pointer"
          onClick={() => setAutoPlay(!autoPlay)}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} - ${i + 1}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>

        {/* PLAY/PAUSE BUTTON */}
        {images.length > 1 && (
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all"
            aria-label={autoPlay ? "Pause slideshow" : "Play slideshow"}
          >
            {autoPlay ? "⏸" : "▶"}
          </button>
        )}

        {/* DOTS INDICATOR */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                  setAutoPlay(false); // Manual click pe auto-scroll band
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="font-semibold text-2xl text-gray-900 mb-2">{title}</h3>
        <p className="text-green-700 font-medium mb-2">{subtitle}</p>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* CTA */}
      <a href="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
        <button className="m-4 px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
          Book Appointment →
        </button>
      </a>
    </div>
  );
}