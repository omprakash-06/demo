import { useState, useEffect } from "react";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function TrainingTable({ setSelected, refreshKey }) {
  const [trainings, setTrainings] = useState([]);

  const fetchTrainings = async () => {
    try {
      const res = await fetch(`${BACKEND}/training/all`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log (data)
      // 🔥 convert images[] to base64 array
      const formatted = data.map((t) => ({
        ...t,
        images: t.images
          ? t.images.map(
              (img) =>
                `data:${img.contentType};base64,${btoa(
                  new Uint8Array(img.data.data).reduce(
                    (acc, b) => acc + String.fromCharCode(b),
                    ""
                  )
                )}`
            )
          : [],
      }));

      setTrainings(formatted);
    } catch (err) {
      console.error(err);
      setTrainings([]);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, [refreshKey]);

  const handleDelete = async (id) => {
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

  const handleEdit = (training) => {
    setSelected(training);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border overflow-x-auto">
      <h3 className="text-lg font-semibold mb-3">
        Existing Trainings / Workshops
      </h3>

      {trainings.length === 0 ? (
        <p>No trainings yet.</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Images</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Subtitle</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {trainings.map((t) => (
              <tr key={t._id} className="align-top">
                {/* 🔥 MULTIPLE IMAGE SCROLL */}
                <td className="border p-2">
                  {t.images.length > 0 ? (
                    <div className="flex gap-2 max-w-[220px] overflow-x-auto scrollbar-thin scrollbar-thumb-green-400">
                      {t.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="training"
                          className="w-20 h-20 object-cover rounded"
                        />
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </td>

                <td className="border p-2">{t.title}</td>
                <td className="border p-2">{t.subtitle}</td>
                <td className="border p-2 max-w-xs">{t.description}</td>

                <td className="border p-2">
                  <div className="flex flex-col gap-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded"
                      onClick={() => handleEdit(t)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(t._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
