import { useState, useEffect } from "react";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function TrainingTable({ setSelected, refreshKey }) {
  const [trainings, setTrainings] = useState([]);

  const fetchTrainings = async () => {
    try {
      const res = await fetch(`${BACKEND}/training/all`, { credentials: "include" });
      const data = await res.json();

      const formatted = data?.map(t => ({
        ...t,
        img: t.image
          ? `data:${t.image.contentType};base64,${btoa(
              new Uint8Array(t.image.data.data).reduce(
                (acc, b) => acc + String.fromCharCode(b),
                ""
              )
            )}`
          : null,
      }));

      setTrainings(formatted || []);
    } catch (err) {
      console.error(err);
      setTrainings([]);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, [refreshKey]);

  const handleDelete = async id => {
    if (!confirm("Are you sure?")) return;

    try {
      const res = await fetch(`${BACKEND}/training/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Deleted successfully");
        fetchTrainings();
      } else {
        alert(data.message || "Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
  
  const handleEdit = training => {
    setSelected(training);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border overflow-x-auto">
      <h3 className="text-lg font-semibold mb-2">Existing Trainings / Workshops</h3>

      {trainings.length === 0 ? (
        <p>No trainings yet.</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Subtitle</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {trainings.map(t => (
              <tr key={t._id}>
                <td className="border p-2">
                  {t.img ? (
                    <img src={t.img} className="w-20 h-20 object-cover rounded" />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="border p-2">{t.title}</td>
                <td className="border p-2">{t.subtitle}</td>
                <td className="border p-2">{t.description}</td>

                <td className="border p-3 flex flex-col gap-2 justify-center">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(t._id)}
                  >
                    Delete
                  </button>

                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(t)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
