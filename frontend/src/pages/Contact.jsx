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

    if (!name || !phone || !type || !message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/enquiry/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact: phone, // backend me "contact" field
          email,
          type,
          msg: message,   // backend me "msg" field
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        alert(data.message || "Submission failed");
        return;
      }

      alert("Form submitted successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setType("");
      setMessage("");

    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
      />
      <input
        type="tel"
        placeholder="Contact Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
      />
      <input
        type="email"
        placeholder="Email (Optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-green-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
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
        onChange={(e) => setMessage(e.target.value)}
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
  );
}
