import { useState, useEffect } from "react";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function ServiceTable({ refresh, refreshKey, setSelected }) {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await fetch(`${BACKEND}/service/all`, { credentials: "include" });
      const data = await res.json();
      if (res.ok) setServices(data.services || []);
    } catch (err) {
      console.error(err);
      setServices([]);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [refreshKey]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`${BACKEND}/service/delete/${id}`, { 
        credentials: "include",
        method: "DELETE" 
      });
      const data = await res.json();

      if (res.ok) {
        alert("Deleted successfully");
        fetchServices();
      } else alert(data.message || "Failed");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleEdit = (service) => {
    setSelected(service);   // send data to form
    window.scrollTo(0, 0);  // scroll to top where form is
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border overflow-x-auto">
      <h3 className="text-lg font-semibold mb-2">Existing Services</h3>

      {services.length === 0 ? <p>No services yet.</p> :
      
      <table className="min-w-full border-collapse">
        <thead className="bg-green-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Subtitle</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s,i) => (
            <tr key={s._id}>
              <td className="border p-2">{i+1}</td>
              <td className="border p-2">{s.title}</td>
              <td className="border p-2">{s.subtitle}</td>
              <td className="border p-2">{s.description}</td>
              <td className="border p-2 flex flex-col gap-2 justify-center">
                <button className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(s._id)}>
                  Delete
                </button>

                <button className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => handleEdit(s)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}
