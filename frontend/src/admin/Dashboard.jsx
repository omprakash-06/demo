import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/enquiry/all`);
        const data = await res.json();
        if (res.ok) setEnquiries(data.enquiries);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Welcome Back {user ? user.fullname : "Admin"}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow border border-green-200">
          <p className="text-gray-500 mb-2">Total Enquiries</p>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">{enquiries.length}</h2>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Recent Enquiries</h2>
      <div className="overflow-x-auto bg-white p-4 rounded-xl shadow border border-green-100">
        {loading ? (
          <p>Loading enquiries...</p>
        ) : enquiries.length === 0 ? (
          <p>No enquiries yet.</p>
        ) : (
          <table className="min-w-full">
            <thead className="bg-green-100 text-left">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Contact</th>
                <th className="p-2">Email</th>
                <th className="p-2">Type</th>
                <th className="p-2">Message</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.contact}</td>
                  <td className="p-2">{item.email}</td>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.msg}</td>
                  <td className="p-2">{new Date(item.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
