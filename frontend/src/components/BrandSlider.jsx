export default function BrandSlider() {
  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
  ];

  return (
    <div className="w-full  bg-white py-10 overflow-hidden m-0 md:m-20">
      <h1 className="text-4xl text-center mb-12 font-bold text-green-800 ">Recent Session </h1>
      <div className="flex items-center justify-between md:mx-48 gap-16  overflow-x-auto whitespace-nowrap no-scrollbar px-6">
        {brands.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
