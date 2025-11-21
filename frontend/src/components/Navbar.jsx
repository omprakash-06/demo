import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-700">
         <img src={logo} alt="logo" className="h-10 md:h-20" />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
          <li><Link to="/training" className="hover:text-green-600">Training</Link></li>
          <li><Link to="/testimonials" className="hover:text-green-600">Client Story</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white border-t text-gray-700 font-medium">
          <li className="px-6 py-3 border-b"><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li className="px-6 py-3 border-b"><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li className="px-6 py-3 border-b"><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li className="px-6 py-3 border-b"><Link to="/training" onClick={() => setOpen(false)}>Training</Link></li>
          <li className="px-6 py-3 border-b"><Link to="/testimonials" onClick={() => setOpen(false)}>Client Story</Link></li>
          <li className="px-6 py-3"><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
