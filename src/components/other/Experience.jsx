import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { SiCplusplus, SiReact } from 'react-icons/si'; // Using icons as logo placeholders

const Experience = () => {
  const experiences = [
    {
      company: "Coding Blocks",
      role: "Full Stack Intern",
      duration: "Month Year - Month Year (3 Mos)",
      description: "Built end-to-end CRUD applications, collaborated in an agile team environment.",
      logoIcon: <SiCplusplus className="text-orange-500 text-2xl" />, // Placeholder color match
      side: "left"
    },
    {
      company: "TechNexware Digital",
      role: "MERN Stack Intern",
      duration: "Month Year - Month Year (3 Mos)",
      description: "Developed reusable React components, optimized backend API performance by 20%.",
      logoIcon: <SiReact className="text-blue-500 text-2xl" />, // Placeholder color match
      side: "right"
    }
  ];

  return (
    <section id="experience" className="relative w-full py-20 px-6 md:px-12 bg-[#0a0a1a] overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#00f2ff]">Journey</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f2ff] to-[#bd00ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Line (Animated) */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-800 rounded-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-[#00f2ff] to-[#bd00ff]"
            />
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-24 relative">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 1. The Card (Content) */}
                <div className="w-full md:w-5/12 pl-8 md:pl-0 md:pr-0">
                  <motion.div
                    initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative bg-[#11112b]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] transition-shadow group"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4">
                      <div className="p-3 bg-[#1a1a2e] rounded-lg border border-white/10 group-hover:border-[#00f2ff]/50 transition-colors">
                        {exp.logoIcon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <h4 className="text-[#00f2ff] font-medium text-sm">{exp.company}</h4>
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-mono">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>

                    {/* Description */}
                    <div className="relative">
                       <p className="text-gray-300 text-sm leading-relaxed">
                         {exp.description}
                       </p>
                    </div>

                    {/* Small arrow pointing to center line (Desktop only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#11112b] border-t border-l border-white/10 transform rotate-45 ${exp.side === 'left' ? '-right-2 border-r-0 border-b-0' : '-left-2 border-l-0 border-t-0 border-r border-b'}`}></div>
                  </motion.div>
                </div>

                {/* 2. The Timeline Dot (Center) */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a1a] border-2 border-[#00f2ff] z-10 mt-6 md:mt-0">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.2), type: "spring" }}
                    className="w-full h-full bg-[#00f2ff] rounded-full shadow-[0_0_10px_#00f2ff]"
                  />
                </div>

                {/* 3. Empty Spacer for the other side */}
                <div className="w-full md:w-5/12"></div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;