import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#0a0a1a] pt-10 pb-8 px-4 md:px-12 border-t border-white/10 relative">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* --- Left: Back to Top & Copyright --- */}
        <div className="flex items-center gap-4 order-3 md:order-1">
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-[#11112b] border border-white/10 rounded-lg text-gray-400 hover:text-[#00f2ff] hover:border-[#00f2ff] transition-all duration-300 shadow-lg group"
            aria-label="Back to Top"
          >
            <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <p className="text-gray-500 text-sm">
            © 2024 Ishwar. All rights reserved.
          </p>
        </div>

        {/* --- Center: Navigation Links --- */}
        <div className="flex items-center gap-4 text-sm font-medium text-gray-400 order-1 md:order-2">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <span className="text-gray-700">|</span>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <span className="text-gray-700">|</span>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <span className="text-gray-700">|</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* --- Right: Social Icons --- */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          <a href="#" className="text-[#00f2ff] hover:text-white hover:scale-110 transition-all text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-[#00f2ff] hover:text-white hover:scale-110 transition-all text-xl">
            <FaGithub />
          </a>
          <a href="#" className="text-[#00f2ff] hover:text-white hover:scale-110 transition-all text-xl">
            <FaEnvelope />
          </a>
          <a href="#" className="text-[#00f2ff] hover:text-white hover:scale-110 transition-all text-xl">
            {/* Using Twitter icon as placeholder for X if specific X icon isn't available in your version */}
            <FaTwitter /> 
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;