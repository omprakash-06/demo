import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !type || !message) return alert("Please fill all required fields");

    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/enquiry/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact: phone, email, type, msg: message }),
      });
      const data = await res.json();
      setLoading(false);

      if (!res.ok) return alert(data.message || "Submission failed");

      alert("Form submitted successfully!");
      setName(""); setPhone(""); setEmail(""); setType(""); setMessage("");
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full bg-[#f7faf7]">

      {/* HEADER / BANNER */}
      <section className="relative w-full h-64 md:h-72 lg:h-80">
        <img
          src="https://imgs.search.brave.com/9dlLhb2K7TmjAwD8SwD6dmRmU6jBrwFWhFllnUHgleA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/MjY0NTMyOS9waG90/by90ZWFtd29yay1t/ZWV0aW5nLWFuZC1p/ZGVhcy1mb3Itc29s/dXRpb24tb3ItZGVj/aXNpb24tZm9yLWJ1/c2luZXNzLXdvcmtw/bGFjZS1vci1jb21w/YW55LWdyb3VwLndl/YnA_YT0xJmI9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz05d3lH/bXFna0VRWWNfM0ts/V2V5bWFhb1lqSnc3/UTdBLTR5NjZXdnZn/VzlBPQ"
          alt="Contact Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold tracking-wide">Contact Us</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Get in Touch</h2>
        <p className="text-gray-700 text-lg">Get in touch for consultations, training sessions, or general enquiries.</p>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-16">

        {/* LEFT SIDE – IMAGE + CONTACT DETAILS */}
        <div className="space-y-6">
          <img
            src="https://images.jdmagicbox.com/comp/raipur-chhattisgarh/n1/9999px771.x771.191031180907.c4n1/catalogue/dr-meeta-mishra-nutritionist--raipur-chhattisgarh-0dkujp6tud.jpg"
            alt="Office"
            className="rounded-2xl shadow-md w-full object-cover"
          />
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Contact Details</h3>
            <p className="text-gray-700 mb-3">📍 <strong>Address:</strong><br/>In Front of Indian Chilly, Vidya’s Protein World,<br/>Shankar Nagar, Raipur, Chhattisgarh</p>
            <p className="text-gray-700 mb-3">📞 <strong>Phone / WhatsApp:</strong><br/>8982627838, 9589345938</p>
            <p className="text-gray-700 mb-3">✉️ <strong>Email:</strong><br/>meetadiet@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE – ENQUIRY FORM */}
        <div className="bg-white shadow rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-green-700 mb-6">Enquiry Form</h3>
          <form className="space-y-5" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              required
              className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email (Optional)"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <select
              value={type}
              onChange={(e)=>setType(e.target.value)}
              required
              className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select Enquiry Type</option>
              <option>Diet Consultation</option>
              <option>Training / Workshop</option>
              <option>Corporate Session</option>
              <option>Guest Speaker Invitation</option>
              <option>General Enquiry</option>
            </select>

            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              required
              className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold shadow hover:bg-green-700 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>

      </section>

      {/* GOOGLE MAP */}
      <section className="w-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Vidya's+Protein+World+Raipur&output=embed"
          className="w-full h-96 md:h-[450px] border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
