import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-green-700">
          <img src={logo} alt="logo" className="h-10 md:h-20" />
        </NavLink>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-green-600 text-green-700 pb-1"
                  : "hover:text-green-600"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-green-600 text-green-700 pb-1"
                  : "hover:text-green-600"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-green-600 text-green-700 pb-1"
                  : "hover:text-green-600"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/training"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-green-600 text-green-700 pb-1"
                  : "hover:text-green-600"
              }
            >
              Training
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-green-600 text-green-700 pb-1"
                  : "hover:text-green-600"
              }
            >
              Client Story
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-green-600 text-green-700 pb-1"
                  : "hover:text-green-600"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white border-t text-gray-700 font-medium">

          <li className="px-6 py-3 border-b">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          </li>

          <li className="px-6 py-3 border-b">
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          </li>

          <li className="px-6 py-3 border-b">
            <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          </li>

          <li className="px-6 py-3 border-b">
            <NavLink to="/training" onClick={() => setOpen(false)}>Training</NavLink>
          </li>

          <li className="px-6 py-3 border-b">
            <NavLink to="/testimonials" onClick={() => setOpen(false)}>Client Story</NavLink>
          </li>

          <li className="px-6 py-3">
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </li>

        </ul>
      )}
    </nav>
  );
}