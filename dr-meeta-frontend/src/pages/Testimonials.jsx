import { useState } from "react";
import story1 from "../assets/t1.jpg";
import story2 from "../assets/t2.jpg";
import story3 from "../assets/t3.jpg";
import story4 from "../assets/t4.jpg";
import story5 from "../assets/t5.jpg";

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);

  const stories = [
    { img: story1 },
    { img: story2 },
    { img: story3 },
    { img: story4 },
    { img: story5 },
  ];

  return (
     <div className="bg-green-50 min-h-screen py-16 px-6">
       <h2 className="text-3xl font-bold text-center text-green-700 mb-10"> Client Story Gallery </h2> 
       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12"> Real transformation journeys that inspire and motivate. Every story reflects dedication, consistent guidance, and a personalized approach. </p>
      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stories.map((item, i) => (
          <img
            key={i}
            src={item.img}
            alt="story"
            onClick={() => setSelectedImage(item)}
            className="w-full h-80 object-cover rounded-xl cursor-pointer hover:opacity-90 transition"
          />
        ))}
      </div>

      {/* Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">

          <div className="relative bg-white p-4 rounded-xl max-w-lg w-full">
            
            {/* Close */}
            <button
              className="absolute top-2 right-3 text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* Large Image */}
            <img
              src={selectedImage.img}
              alt="big"
              className="w-full rounded-lg"
            />

          </div>

        </div>
      )}
      

    </div>
  );
}
