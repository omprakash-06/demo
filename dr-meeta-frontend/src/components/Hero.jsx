import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="w-full bg-[#eaf4ec] pt-10 pb-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
           Eat Right. Live Bright.
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
            Personalized nutrition plans backed by 17+ years of clinical & fitness nutrition expertise.
          </p>

          <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-green-700 transition">
              Book Consultation
            </button>
          </Link>

          <Link to="/services">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition ml-6">
              View Services
            </button>
          </Link>
        </div>

        {/* RIGHT DOCTOR IMAGE */}
        <div className="relative flex justify-center">
          {/* Curved decorative shape */}
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-green-200 rounded-full blur-2xl opacity-50"></div>

          <img
            src="https://imgs.search.brave.com/lwDNwhi-AXr5pNvfzJtVRX_P6ZYpXLofsEWXQvbYUV4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/NTAzOTY5Ny9waG90/by9oZWFsdGh5LWZy/dWl0cy1hbmQtdmVn/ZXRhYmxlcy1zYWxh/ZC1yZWNpcGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWZ2/eExKSjk0bm82a2xB/N244U1V2bnBjXzBM/YmZFTDgyT2VpR0dH/VS13RTQ9"
            alt="Dr Meeta Mishra"
            className="relative z-10 rounded-3xl shadow-lg w-72 md:w-96 object-cover"
          />
        </div>

      </div>
    </section>
  );
}
