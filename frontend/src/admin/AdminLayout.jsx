import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      {/* MOBILE HAMBURGER */}
      <div className="md:hidden flex justify-between items-center bg-white p-4 shadow">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-green-600 text-2xl">➕</span> Admin
        </h2>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
          {/* Simple Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* SIDEBAR / NAV */}
      <aside className={`bg-white shadow-xl md:shadow-none md:w-64 p-4 md:p-6 md:flex flex-col absolute md:relative top-0 left-0 h-full md:h-auto z-50 transform md:translate-x-0 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
          <span className="text-green-600 text-2xl">➕</span> Doctor Admin
        </h2>

        <nav className="flex md:flex-col gap-2 md:gap-4">
          <NavLink to="/admin/dashboard" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? "bg-green-200 text-green-800" : "text-gray-700"}`}>Dashboard</NavLink>
          <NavLink to="/admin/enquiries" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? "bg-green-200 text-green-800" : "text-gray-700"}`}>Enquiries</NavLink>
          <NavLink to="/admin/services" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? "bg-green-200 text-green-800" : "text-gray-700"}`}>Services</NavLink>
          <NavLink to="/admin/training" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? "bg-green-200 text-green-800" : "text-gray-700"}`}>Training & Workshops</NavLink>
          <NavLink to="/admin/testimonials" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? "bg-green-200 text-green-800" : "text-gray-700"}`}>Client Story</NavLink>
        </nav>

        {admin && <button onClick={logout} className="mt-4 md:mt-6 text-red-500">Logout</button>}
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-6 overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
}
