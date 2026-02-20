import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const [counts, setCounts] = useState({
    services: 0,
    trainings: 0,
    testimonials: 0
  });
  const BACKEND = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [enqRes, serRes, trainRes, testRes] = await Promise.all([
          fetch(`${BACKEND}/service/all`, { credentials: "include" }),
          fetch(`${BACKEND}/training/all`, { credentials: "include" }),
          fetch(`${BACKEND}/testimonial/all`, { credentials: "include" }),
        ]);

        const [enqData, serData, trainData, testData] = await Promise.all([
          enqRes.json(), serRes.json(), trainRes.json(), testRes.json()
        ]);

        setCounts({
          services: serData.services?.length || 0,
          trainings: trainData.length || 0,
          testimonials: testData.length || 0
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchCounts();
  }, [BACKEND]);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Welcome Back {user?.fullname || "Admin"}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(counts).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded-xl shadow border border-green-200">
            <p className="text-gray-500 mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-green-700">{value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
