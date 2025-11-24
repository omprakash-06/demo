import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-black">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* GRID 4 COLUMNS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ABOUT */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-black">Dr. Meeta Mishra</h2>
            <p className="text-sm text-gray-800">
              Certified Dietitian & Clinical Nutritionist helping people achieve
              sustainable health through personalized nutrition.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-950">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><Link to="/" className="hover:text-green-700">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-700">About</Link></li>
              <li><Link to="/services" className="hover:text-green-700">Services</Link></li>
              <li><Link to="/training" className="hover:text-green-700">Training</Link></li>
              <li><Link to="/testimonials" className="hover:text-green-700">Client Story</Link></li>
              <li><Link to="/contact" className="hover:text-green-700">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Contact</h3>

            <p className="text-sm text-gray-800 mb-1">
              <i className="fa-solid fa-location-dot"></i> In Front of Indian Chilly,Vidya's Protein World, Shankar Nagar, Raipur , Chhattisgarh
            </p>
            <p className="text-sm text-gray-900 mb-1">
              <i className="fa-solid fa-phone"></i> +91 9589345938 or +91 8982627838
            </p>
            <p className="text-sm text-gray-900 mb-1">
              <i className="fa-solid fa-envelope"></i> meetadiet@gmail.com
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-3">
              <a href="https://wa.me/919589345938?text=I%20want%20to%20book%20a%20diet%20consult" className="text-2xl text-green-700 hover:text-green-600">
                <i className="fa-brands fa-square-whatsapp"></i>
              </a>

              <a href="https://www.instagram.com/dr.meetamishra?igsh=MXJ3cW9xN2VmdTJuaA==" className="text-2xl text-pink-600 hover:text-pink-500">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="https://www.facebook.com/DrMeetaMishra" className="text-2xl text-blue-600 hover:text-blue-500">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" className="text-2xl text-black hover:text-gray-700">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-900 mt-10 pt-5 border-t border-green-500">
          © {new Date().getFullYear()} Dr. Meeta Mishra — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
