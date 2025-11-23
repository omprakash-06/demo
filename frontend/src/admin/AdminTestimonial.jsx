import { useState, useEffect } from "react";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(`${BACKEND}/testimonial/all`, { credentials: "include" });
      const data = await res.json();
      const formatted = data?.map(t => ({
        ...t,
        img: t.image ? `data:${t.image.contentType};base64,${btoa(
          new Uint8Array(t.image.data.data).reduce((acc,b)=>acc+String.fromCharCode(b),"")
        )}` : null
      })) || [];
      setTestimonials(formatted);
    } catch (err) {
      console.error(err);
      setTestimonials([]);
    }
  };

  useEffect(() => { fetchTestimonials(); }, [refreshFlag]);
  const refresh = () => setRefreshFlag(prev => !prev);

  return (
    <div className="p-4 md:p-6">
      <TestimonialForm refresh={refresh}/>
      <TestimonialTable testimonials={testimonials} refresh={refresh}/>
    </div>
  );
}

// Separate Form
function TestimonialForm({ refresh }) {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState(null);
  const [editingId,setEditingId] = useState(null);
  const [loading,setLoading] = useState(false);

  const resetForm = () => { setTitle(""); setDescription(""); setImage(null); setEditingId(null); }

  const handleSave = async () => {
    if(!title || !description || (!image && !editingId)) { alert("All fields required"); return; }

    const formData = new FormData();
    formData.append("title",title);
    formData.append("description",description);
    if(image) formData.append("image",image);

    try{
      setLoading(true);
      const url = editingId ? `${BACKEND}/testimonial/update/${editingId}` : `${BACKEND}/testimonial/create`;
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, { credentials:"include", method, body:formData });
      const data = await res.json();
      setLoading(false);

      if(res.ok){ alert(editingId ? "Updated":"Saved"); resetForm(); refresh(); }
      else alert(data.message||"Failed");
    }catch(err){ setLoading(false); console.error(err); alert("Something went wrong"); }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow border space-y-4 mb-6">
      <h2 className="text-2xl font-semibold">{editingId ? "Edit Testimonial":"Add Testimonial"}</h2>
      <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="w-full border px-3 py-2 rounded-lg"/>
      <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} className="w-full border px-3 py-2 rounded-lg" rows="4"/>
      <label className="border-2 border-dashed border-green-400 rounded-lg w-full h-48 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition">
        {image ? <p className="text-green-700 font-medium">{image.name}</p> : <> <p className="text-gray-600">Image Upload</p><p className="text-xs text-gray-400">Drag & drop or click here</p></>}
        <input type="file" accept="image/*" className="hidden" onChange={e=>setImage(e.target.files[0])}/>
      </label>
      <button onClick={handleSave} disabled={loading} className="w-full bg-green-600 text-white py-2 rounded-lg">{loading ? "Saving..." : editingId ? "Update":"Save"}</button>
      {editingId && <button onClick={resetForm} className="w-full bg-gray-500 text-white py-2 rounded-lg">Cancel</button>}
    </div>
  );
}

// Separate Table
function TestimonialTable({ testimonials, refresh }) {
  const handleDelete = async id => {
    if(!confirm("Are you sure?")) return;
    try{
      const res = await fetch(`${BACKEND}/testimonial/delete/${id}`, {credentials:"include", method:"DELETE"});
      const data = await res.json();
      if(res.ok){ alert("Deleted"); refresh(); }
      else alert(data.message||"Failed");
    }catch(err){ console.error(err); alert("Something went wrong"); }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow border overflow-x-auto">
      <h3 className="text-lg font-semibold mb-2">Existing Testimonials</h3>
      {(!testimonials || testimonials.length===0)? <p>No testimonials yet.</p> :
      <table className="min-w-full border-collapse">
        <thead className="bg-green-100">
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((t,i)=>(
            <tr key={t._id || i}>
              <td className="border p-2">{t.img ? <img src={t.img} alt={t.title} className="w-20 h-20 object-cover rounded"/> : "No Image"}</td>
              <td className="border p-2">{t.title}</td>
              <td className="border p-2">{t.description}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={()=>handleDelete(t._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}
