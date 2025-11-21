import { useState, useEffect } from "react";

export default function TrainingAdmin() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [trainings, setTrainings] = useState([]); // default empty array
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const BACKEND = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const res = await fetch(`${BACKEND}/training/all`);
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

      setTrainings(formatted|| []); // safe fallback
    } catch (err) {
      console.error(err);
      setTrainings([]); // fallback
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const resetForm = () => {
    setTitle(""); 
    setSubtitle(""); 
    setDescription(""); 
    setFile(null); 
    setEditingId(null);
  };

  const handleSave = async () => {
    if (!title || !subtitle || !description) return alert("All fields required");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("description", description);
    if (file) formData.append("image", file);

    try {
      setLoading(true);
      const url = editingId 
        ? `${BACKEND}/training/update/${editingId}` 
        : `${BACKEND}/training/create`;
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, { method, body: formData });
      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        alert(editingId ? "Updated successfully" : "Saved successfully");
        resetForm();
        fetchTrainings();
      } else alert(data.message || "Failed");
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleEdit = (t) => {
    setTitle(t.title); 
    setSubtitle(t.subtitle); 
    setDescription(t.description); 
    setEditingId(t._id); 
    setFile(null); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`${BACKEND}/training/delete/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        alert("Deleted successfully");
        fetchTrainings();
      } else alert(data.message || "Failed");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-6">{editingId ? "Update Training/Workshop" : "Add Training/Workshop"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow border space-y-4">
          <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
          <input type="text" placeholder="Subtitle" value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
          <textarea placeholder="Description" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
          <button onClick={handleSave} disabled={loading} className="w-full bg-green-600 text-white py-2 rounded-lg">{loading ? "Saving..." : editingId ? "Update" : "Save"}</button>
          {editingId && <button onClick={resetForm} className="w-full bg-gray-500 text-white py-2 rounded-lg">Cancel</button>}
        </div>

        <div className="bg-white p-4 rounded-xl shadow border flex justify-center items-center">
          <label className="border-2 border-dashed border-green-400 rounded-lg w-full h-48 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition">
            {file ? <p className="text-green-700 font-medium">{file.name}</p> : <><p className="text-gray-600">Image Upload</p><p className="text-xs text-gray-400">Drag & drop or click here</p></>}
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange}/>
          </label>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-xl shadow border overflow-x-auto">
        <h3 className="text-lg font-semibold mb-2">Existing Trainings/Workshops</h3>
        {(!trainings || trainings.length === 0) ? (
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
              {trainings.map((t,i)=>(
                <tr key={t._id || i}>
                   <td className="py-2 px-4 border">
                    {t.img ? <img src={t.img} alt={t.title} className="w-20 h-20 object-cover rounded" /> : "No Image"}
                  </td>
                  <td className="border p-2">{t.title}</td>
                  <td className="border p-2">{t.subtitle}</td>
                  <td className="border p-2">{t.description}</td>
                  <td className="border p-2 flex gap-2 justify-center">
                    <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={()=>handleEdit(t)}>Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={()=>handleDelete(t._id)}>Delete</button>
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
