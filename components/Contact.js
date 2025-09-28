"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xldwwkda", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again ❌");
      }
    } catch (error) {
      toast.error("Something went wrong 😓");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <Toaster position="bottom-right" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Left side: Contact info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gold">Get in Touch</h2>
          <p className="text-gray-400">
            I’d love to hear from you! Reach out through the form or directly via:
          </p>
          <ul className="space-y-3">
            <li>
              <span className="text-gold font-medium">Email:</span>{" "}
              <a href="mailto:outreach.sirtimithedev@gmail.com" className="hover:underline">
                outreach.sirtimithedev@gmail.com
              </a>
            </li>
            <li>
              <span className="text-gold font-medium">WhatsApp:</span>{" "}
              <a href="https://wa.me/+2349155875150" target="_blank" className="hover:underline">
                +234 915 587 5150
              </a>
            </li>
            <li>
              <span className="text-gold font-medium">X (Twitter):</span>{" "}
              <a href="https://x.com/@SirTimitheDev" target="_blank" className="hover:underline">
                @SirTimitheDev
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/30 p-6 rounded-2xl shadow-lg space-y-6 border border-gray-700"
        >
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-dark text-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-dark text-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 bg-dark text-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
