import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* LAYOUTS */
import PublicLayout from "./layouts/PublicLayout";

/* PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

/* ADMIN */
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ServicesAdmin from "./admin/Services/ServicesAdmin";
import TrainingAdmin from "./admin/Trainings/TrainingAdmin";
import TestimonialsAdmin from "./admin/AdminTestimonial";

/* PROTECTED ROUTE */
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* PUBLIC PAGES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* PROTECTED ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="trainings" element={<TrainingAdmin />} />
          <Route path="testimonials" element={<TestimonialsAdmin />} />
        </Route>

      </Routes>
    </Router>
  );
}
