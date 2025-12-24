import { useState, useEffect } from "react";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function TrainingForm({ selected, setSelected, refresh }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // ✅ single image
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Auto-fill for Edit Mode
  useEffect(() => {
    if (selected) {
      setEditingId(selected._id);
      setTitle(selected.title);
      setSubtitle(selected.subtitle);
      setDescription(selected.description);
      setFile(null); // image optional on edit
    }
  }, [selected]);

  const resetForm = () => {
    setTitle("");
    setSubtitle("");
    setDescription("");
    setFile(null);
    setEditingId(null);
    setSelected(null);
  };

  const handleSave = async () => {
    if (!title || !subtitle || !description) {
      return alert("All fields are required");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("description", description);

    // 🔥 IMPORTANT: backend expects "images" (array)
    if (file) {
      formData.append("images", file); // ✅ single image but key = images
    }

    try {
      setLoading(true);

      const url = editingId
        ? `${BACKEND}/training/update/${editingId}`
        : `${BACKEND}/training/create`;

      const res = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        alert(editingId ? "Updated successfully" : "Saved successfully");
        resetForm();
        refresh();
      } else {
        alert(data.message || "Failed");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border space-y-4 mb-6">
      <h2 className="text-2xl font-semibold">
        {editingId ? "Update Training / Workshop" : "Add Training / Workshop"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded-lg"
      />

      <input
        type="text"
        placeholder="Subtitle"
        value={subtitle}
        onChange={e => setSubtitle(e.target.value)}
        className="w-full border px-3 py-2 rounded-lg"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        rows="4"
        className="w-full border px-3 py-2 rounded-lg"
      />

      {/* IMAGE UPLOAD */}
      <label className="border-2 border-dashed border-green-400 rounded-lg w-full h-48 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50">
        {file ? (
          <p className="text-green-700 font-medium">{file.name}</p>
        ) : (
          <>
            <p className="text-gray-600">Image Upload</p>
            <p className="text-xs text-gray-400">Click to upload (1 image)</p>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={e => setFile(e.target.files[0])}
        />
      </label>

      <button
        onClick={handleSave}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg"
      >
        {loading ? "Saving..." : editingId ? "Update" : "Save"}
      </button>

      {editingId && (
        <button
          onClick={resetForm}
          className="w-full bg-gray-500 text-white py-2 rounded-lg"
        >
          Cancel
        </button>
      )}
    </div>
  );
}
