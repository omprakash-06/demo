import { useState, useEffect } from "react";

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filtered = enquiries.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.email.toLowerCase().includes(search.toLowerCase()) ||
    e.msg.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-4">Enquiries</h1>

      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search enquiries..."
          className="px-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded-xl shadow border">
        {loading ? (
          <p>Loading enquiries...</p>
        ) : filtered.length === 0 ? (
          <p>No enquiries found.</p>
        ) : (
          <table className="min-w-full text-left">
            <thead className="bg-green-100">
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
              {filtered.map((item, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
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
