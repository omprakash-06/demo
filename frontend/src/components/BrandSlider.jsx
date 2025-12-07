import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.jpg"
import logo5 from "../assets/logo5.png"
export default function BrandSlider() {
  const brands = [
    logo1,logo2,logo3,logo4,logo5
  ];

  return (
    <div className="py-10 overflow-hidden m-0 md:m-20">
      <h1 className="text-4xl text-center mb-12 font-bold text-green-800 ">Recent Session </h1>
      <div className="flex items-center justify-between md:mx-48 gap-16  overflow-x-auto whitespace-nowrap no-scrollbar ">
        {brands.map((logo, index) => 
      
          <img
            key={index}
            src={logo}
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
