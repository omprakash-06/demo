import { useState, useEffect } from "react";

export default function TestimonialsAdmin() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]); // default empty array
  const [editingId, setEditingId] = useState(null);

  const BACKEND = import.meta.env.VITE_BACKEND_URL;

  // Fetch all testimonials
  const fetchTestimonials = async () => {
    try {
      const res = await fetch(`${BACKEND}/testimonial/all`);
      const data = await res.json();

      // Convert backend data to proper format
      const formatted = data?.map((t) => ({
        ...t,
        img: t.image
          ? `data:${t.image.contentType};base64,${btoa(
              new Uint8Array(t.image.data.data).reduce(
                (acc, byte) => acc + String.fromCharCode(byte),
                ""
              )
            )}`
          : null,
      })) || [];

      setTestimonials(formatted);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      setTestimonials([]); // fallback
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = async () => {
    if (!title || !description || (!image && !editingId)) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      const url = editingId
        ? `${BACKEND}/testimonial/update/${editingId}`
        : `${BACKEND}/testimonial/create`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        alert(editingId ? "Testimonial updated successfully" : "Testimonial saved successfully");
        setTitle("");
        setDescription("");
        setImage(null);
        setEditingId(null);
        fetchTestimonials();
      } else {
        alert(data.message || "Failed to save testimonial");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleEdit = (t) => {
    setEditingId(t._id);
    setTitle(t.title);
    setDescription(t.description);
    setImage(null); // optional reset
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`${BACKEND}/testimonial/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        alert("Deleted successfully");
        fetchTestimonials();
      } else {
        alert(data.message || "Failed to delete");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6">{editingId ? "Edit Client Story" : "Add Client Story"}</h2>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
            rows="4"
          />

          <label className="border-2 border-dashed border-green-400 rounded-lg w-full h-48 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition">
            {image ? (
              <p className="text-green-700 font-medium">{image.name}</p>
            ) : (
              <>
                <p className="text-gray-600">Image Upload</p>
                <p className="text-xs text-gray-400">Drag & drop or click here</p>
              </>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>

          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg w-full"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : editingId ? "Update Testimonial" : "Save Testimonial"}
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        {(!testimonials || testimonials.length === 0) ? (
          <p className="text-center py-4">No testimonials yet.</p>
        ) : (
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="py-2 px-4 border">Image</th>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t, idx) => (
                <tr key={t._id || idx} className="border-b">
                  <td className="py-2 px-4 border">
                    {t.img ? <img src={t.img} alt={t.title} className="w-20 h-20 object-cover rounded" /> : "No Image"}
                  </td>
                  <td className="py-2 px-4 border">{t.title}</td>
                  <td className="py-2 px-4 border">{t.description}</td>
                  <td className="py-2 px-4 border flex gap-2">
                    <button
                      className="bg-yellow-400 px-3 py-1 rounded text-white"
                      onClick={() => handleEdit(t)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 px-3 py-1 rounded text-white"
                      onClick={() => handleDelete(t._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
