import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaUsers, FaComments, FaLightbulb } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiRedux, SiTailwindcss, SiPostman } from 'react-icons/si';

// Helper Component for Circular Progress
const SkillCircle = ({ icon: Icon, percentage, name, color }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
        {/* SVG Circle Wrapper */}
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Track */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#1a1a2e"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]" // Neon Glow
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-3xl md:text-4xl mb-1" style={{ color: color }}>
            <Icon />
          </div>
          <span className="text-sm md:text-lg font-bold">{percentage}%</span>
        </div>
      </div>
      <span className="text-gray-300 font-medium text-lg">{name}</span>
    </div>
  );
};

const Skills = () => {
  // Data for Skills
  const technicalSkills = [
    { name: "MongoDB", icon: SiMongodb, percentage: 85, color: "#47A248" }, // MongoDB Green
    { name: "Express.js", icon: SiExpress, percentage: 80, color: "#ffffff" }, // White
    { name: "React.js", icon: FaReact, percentage: 90, color: "#61DAFB" }, // React Blue
    { name: "Node.js", icon: FaNodeJs, percentage: 85, color: "#339933" }, // Node Green
  ];

  const techCloud = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3 (Tailwind)", icon: SiTailwindcss },
    { name: "Git/GitHub", icon: FaGitAlt },
    { name: "RESTful APIs", icon: SiPostman },
    { name: "Redux", icon: SiRedux },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: FaLightbulb },
    { name: "Team Collaboration", icon: FaUsers },
    { name: "Effective Communication", icon: FaComments },
  ];

  return (
    <section id="skills" className="relative w-full py-20 px-6 md:px-12 bg-[#0a0a1a]">
      {/* Background Glow for Section */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f2ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-[#00f2ff]">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f2ff] to-[#bd00ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* 1. Circular Progress Bars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {technicalSkills.map((skill, index) => (
            <SkillCircle key={index} {...skill} />
          ))}
        </div>

        {/* 2. Tech Cloud (Pills) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          <span className="text-xl font-bold text-white mr-4">Tech Cloud:</span>
          {techCloud.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 242, 255, 0.3)" }}
              className="flex items-center gap-2 px-4 py-2 bg-[#11112b] border border-[#00f2ff]/30 rounded-full text-gray-300 hover:text-white hover:border-[#00f2ff] transition-all cursor-default"
            >
              <tech.icon className="text-[#00f2ff]" />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Soft Skills */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 border-t border-white/10 pt-10">
          <span className="text-xl font-bold text-white">Soft Skills:</span>
          <div className="flex flex-wrap justify-center gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-400">
                <skill.icon className="text-[#bd00ff] text-xl" />
                <span className="text-base md:text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;