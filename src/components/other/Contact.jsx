import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Message sent successfully 🚀');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.message || 'Something went wrong ❌');
      }
    } catch (error) {
      console.error(error);
      alert('Server error ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 md:px-12 bg-[#0a0a1a] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get In Touch
            </h2>

            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1a1a2e] rounded-lg border border-white/10">
                  <FaEnvelope className="text-[#00f2ff] text-xl" />
                </div>
                <a
                  href="mailto:ishwar@example.com"
                  className="text-gray-300 hover:text-[#00f2ff]"
                >
                  ishwar@example.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1a1a2e] rounded-lg border border-white/10">
                  <FaPhoneAlt className="text-[#00f2ff] text-xl" />
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-[#00f2ff]"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#1a1a2e] rounded-lg border border-white/10">
                  <FaMapMarkerAlt className="text-[#00f2ff] text-xl" />
                </div>
                <span className="text-gray-300">
                  Noida, India
                </span>
              </div>
            </div>

            {/* MAP */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 relative">
              <img
                src="https://static.toiimg.com/thumb/msid-79586456,width-400,resizemode-4/79586456.jpg"
                alt="Noida Map"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[#00f2ff]">
                <FaMapMarkerAlt size={40} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#11112b]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-white">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-[#0a0a1a] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:border-[#00f2ff]"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-white">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-[#0a0a1a] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:border-[#00f2ff]"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-white">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi, I have a project idea..."
                  className="bg-[#0a0a1a] border border-white/10 rounded-xl px-4 py-3 text-gray-300 resize-none focus:border-[#00f2ff]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#00f2ff] text-[#0a0a1a] font-bold rounded-xl hover:scale-105 transition-all"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
