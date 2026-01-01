import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className={`min-h-screen w-full font-sans selection:bg-[#00f2ff] selection:text-black ${darkMode ? 'bg-[#0a0a1a]' : 'bg-gray-100'} overflow-x-hidden transition-colors duration-300`}>
      
      {/* --- Background Effects (Cyberpunk Grid/Glow) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Blue Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00f2ff]/10 rounded-full blur-[120px]" />
        {/* Bottom Right Purple Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bd00ff]/10 rounded-full blur-[120px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* --- Navbar (Corrected Clean Version) --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 px-6 py-3 flex justify-between items-center backdrop-blur-md bg-[#0a0a1a]/80 border border-white/10 rounded-full shadow-lg transition-all duration-300">
  
  {/* Left: Logo */}
  <div className="flex items-center">
    <span className="text-2xl font-extrabold text-[#00f2ff] tracking-tighter">i.D.</span>
  </div>

  {/* Center: Nav Links (Clean, No Background) */}
  <div className="hidden md:flex items-center gap-8">
    {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
      <a 
        key={item} 
        href={`#${item.toLowerCase()}`} 
        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
      >
        {item}
        {/* Hover Underline Animation */}
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00f2ff] transition-all duration-300 group-hover:w-full"></span>
      </a>
    ))}
  </div>

  {/* Right: Theme Toggle & Resume Button */}
  <div className="flex items-center gap-4">
    {/* Theme Toggle */}
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-gray-400 hover:text-white transition-colors text-lg"
    >
      {darkMode ? <FaMoon /> : <FaSun />}
    </button>
    
    {/* Resume Button (Neon Cyan Pill) */}
    <a 
      href="#resume" 
      className="px-6 py-2 bg-[#00f2ff] text-[#0a0a1a] font-bold text-sm rounded-full shadow-[0_0_10px_rgba(0,242,255,0.3)] hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] hover:scale-105 transition-all"
    >
      Resume
    </a>
  </div>
</nav>

      {/* --- Main Hero Content --- */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-center md:justify-between pt-20">
        
        {/* Social Sidebar (Left Fixed) */}
        <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 p-4 bg-[#11112b]/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl z-40">
           <a href="#" className="text-gray-400 hover:text-[#00f2ff] text-xl transition-all hover:scale-110"><FaLinkedin /></a>
           <a href="#" className="text-gray-400 hover:text-[#00f2ff] text-xl transition-all hover:scale-110"><FaGithub /></a>
           <a href="#" className="text-gray-400 hover:text-[#00f2ff] text-xl transition-all hover:scale-110"><FaEnvelope /></a>
        </div>

        {/* Left Section: Text */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 text-center md:text-left pl-0 lg:pl-20"
        >
          <motion.p variants={textVariants} className="text-gray-400 text-lg mb-2 font-medium tracking-wide">
            Hello World,
          </motion.p>
          
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-[#00f2ff]">[</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Ishwar</span>
            <span className="text-[#00f2ff]">]</span>
          </motion.h1>

          <motion.h2 variants={textVariants} className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
            MERN Stack Developer <span className="text-[#bd00ff] mx-2">|</span> Turning Ideas into Digital Reality.
          </motion.h2>

          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <button className="px-8 py-3 bg-[#00f2ff] text-[#0a0a1a] font-bold rounded-lg shadow-[0_0_20px_#00f2ff40] hover:shadow-[0_0_30px_#00f2ff60] transition-all hover:-translate-y-1">
              Download Resume
            </button>
            <button className="px-8 py-3 bg-transparent border border-[#bd00ff] text-white font-medium rounded-lg hover:bg-[#bd00ff]/10 hover:shadow-[0_0_20px_#bd00ff40] transition-all">
              View Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section: Geometric Profile Image */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative"
        >
          {/* Animated Background Shapes behind Head */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-[#bd00ff]/30 rounded-full border-dashed"
          />
          <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-[#00f2ff]/20 rounded-full"
          />

          {/* Hexagon-style Container */}
          <div className="relative w-64 h-72 md:w-80 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff] to-[#bd00ff] rounded-[2rem] blur-lg opacity-50"></div>
            
            <div className="relative w-full h-full bg-[#11112b] p-2 rounded-[2rem] border-2 border-[#ffffff10] overflow-hidden shadow-2xl">
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-gray-800 relative">
                {/* Replace src with your actual image */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                  alt="Ishwar" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-80"></div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-8 top-10 w-12 h-12 bg-[#11112b] border border-[#00f2ff] rounded-lg flex items-center justify-center shadow-[0_0_15px_#00f2ff40]"
            >
              <RiCodeSSlashLine className="text-[#00f2ff] text-xl" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 bottom-20 w-auto px-4 py-2 bg-[#11112b]/90 backdrop-blur border border-[#bd00ff] rounded-lg flex items-center gap-2 shadow-[0_0_15px_#bd00ff40]"
            >
              <div className="w-2 h-2 bg-[#bd00ff] rounded-full animate-pulse"></div>
              <span className="text-xs text-white font-medium">MERN Expert</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines/Particles */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
         <line x1="10%" y1="10%" x2="20%" y2="30%" stroke="#00f2ff" strokeWidth="1" />
         <circle cx="10%" cy="10%" r="3" fill="#00f2ff" />
         <line x1="80%" y1="20%" x2="90%" y2="50%" stroke="#bd00ff" strokeWidth="1" />
         <circle cx="90%" cy="50%" r="3" fill="#bd00ff" />
      </svg>
    </div>
  );
};

export default Hero;