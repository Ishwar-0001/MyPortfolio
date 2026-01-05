import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTasks, FaBriefcase } from 'react-icons/fa';

const About = () => {
  // Stats Data
  const stats = [
    { icon: <FaClock />, label: "6 Months", subLabel: "Internship Exp." },
    { icon: <FaTasks />, label: "5+ Freelance", subLabel: "Projects Delivered" },
    { icon: <FaBriefcase />, label: "Actively Seeking", subLabel: "Opportunities" },
  ];

  return (
    <section id="about" className="relative w-full py-20 px-6 md:px-12 bg-[#0a0a1a]">
      <div className="max-w-5xl mx-auto">
        
        {/* Glassmorphic Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#11112b]/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle Gradient Glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f2ff]/5 rounded-full blur-[80px]"></div>

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            
            {/* Left: Avatar */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#00f2ff]/20 overflow-hidden shadow-[0_0_30px_rgba(0,242,255,0.1)] bg-[#1a1a2e]">
                {/* Using a cartoon avatar to match your reference image */}
                <img 
                  src="/myImg.png" 
                  alt="Ishwar Avatar" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About <span className="text-[#00f2ff]">Me</span>
              </h2>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Passionate <span className="text-white font-medium">MERN Stack Developer</span> with a knack for building scalable web applications. My 6-month internship journey has sharpened my skills in turning complex problems into elegant solutions.
              </p>

              {/* Stats Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-[#0a0a1a]/60 border border-white/5 p-4 rounded-xl hover:border-[#00f2ff]/30 transition-colors group"
                  >
                    <div className="text-[#00f2ff] text-xl group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-sm leading-tight">{stat.label}</p>
                      <p className="text-gray-400 text-xs">{stat.subLabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;