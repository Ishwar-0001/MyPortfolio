import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.3 } }
  };

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300">
<div className="px-6 py-3 flex justify-between items-center 
    backdrop-blur-xl bg-transparent/10 
    border border-white/20 
    rounded-full shadow-[0_0_25px_rgba(0,242,255,0.15)]
    transition-all duration-300">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-extrabold text-[#00f2ff] tracking-tighter">i.D.</span>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00f2ff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={toggleTheme} className="p-2 text-gray-400 hover:text-white transition-colors text-lg">
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
          
          <a href="#resume" className="hidden md:block px-6 py-2 bg-[#00f2ff] text-[#0a0a1a] font-bold text-sm rounded-full shadow-[0_0_10px_rgba(0,242,255,0.3)] hover:scale-105 transition-all">
            Resume
          </a>

          <button className="md:hidden text-gray-300 text-xl focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed" animate="open" exit="closed" variants={mobileMenuVariants}
            className="absolute top-full left-0 w-full mt-2 rounded-2xl bg-[#11112b]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-4 gap-4 items-center">
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-[#00f2ff] text-lg font-medium w-full text-center py-2 border-b border-white/5 last:border-0" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <a href="#resume" className="w-full text-center py-3 bg-[#00f2ff] text-[#0a0a1a] font-bold rounded-xl mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;