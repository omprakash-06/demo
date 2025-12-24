import { useState, useEffect } from "react";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function TrainingForm({ selected, setSelected, refresh }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]); // ✅ multiple images
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selected) {
      setEditingId(selected._id);
      setTitle(selected.title);
      setSubtitle(selected.subtitle);
      setDescription(selected.description);
      setFiles([]);
    }
  }, [selected]);

  const resetForm = () => {
    setTitle("");
    setSubtitle("");
    setDescription("");
    setFiles([]);
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

    // 🔥 multiple images
    files.forEach((file) => {
      formData.append("images", file);
    });

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
    <div className="bg-white p-4 rounded-xl shadow space-y-4 mb-6">
      <h2 className="text-2xl font-semibold">
        {editingId ? "Update Training" : "Add Training"}
      </h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border px-3 py-2 rounded-lg"
      />

      <input
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Subtitle"
        className="w-full border px-3 py-2 rounded-lg"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        placeholder="Description"
        className="w-full border px-3 py-2 rounded-lg"
      />

      {/* MULTIPLE IMAGE UPLOAD */}
      <label className="border-2 border-dashed border-green-400 rounded-lg h-40 flex flex-col justify-center items-center cursor-pointer">
        <p className="text-gray-600">
          {files.length > 0
            ? `${files.length} image selected`
            : "Click to upload images"}
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => setFiles([...e.target.files])}
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
