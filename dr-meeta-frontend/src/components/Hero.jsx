import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full bg-[#eaf4ec] pt-10 pb-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">

        {/* RIGHT IMAGE FIRST IN MOBILE */}
        <div className="relative flex justify-center mt-6 md:mt-0">
          <div className="absolute -top-4 -right-4 w-52 h-52 md:w-64 md:h-64 bg-green-200 rounded-full blur-2xl opacity-50"></div>

          <img
            src="https://imgs.search.brave.com/lwDNwhi-AXr5pNvfzJtVRX_P6ZYpXLofsEWXQvbYUV4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/NTAzOTY5Ny9waG90/by9oZWFsdGh5LWZy/dWl0cy1hbmQtdmVn/ZXRhYmxlcy1zYWxh/ZC1yZWNpcGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWZ2/eExKSjk0bm82a2xB/N244U1V2bnBjXzBM/YmZFTDgyT2VpR0dH/VS13RTQ9"
            alt="Dr Meeta Mishra"
            className="relative z-10 rounded-3xl shadow-lg w-64 md:w-96 object-cover"
          />
        </div>

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Eat Right. Live Bright.
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed md:max-w-md mx-auto md:mx-0">
            Personalized nutrition plans backed by 17+ years of clinical & fitness nutrition expertise.
          </p>

          {/* BUTTONS STACK ON MOBILE */}
          <div className="flex flex-col sm:flex-row sm:justify-start gap-4 mt-6">
            <Link to="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-green-700 transition w-full sm:w-auto">
                Book Consultation
              </button>
            </Link>

            <Link to="/services">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition w-full sm:w-auto">
                View Services
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
