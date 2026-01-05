import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCog } from 'react-icons/fa';

const Freelance = () => {
  return (
    <section id="freelance" className="relative w-full py-20 px-4 md:px-12 bg-[#0a0a1a]">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden"
      >
        {/* --- Background with Circuit Pattern & Gradient --- */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] to-[#2d0036]">
          {/* Placeholder for Circuit Pattern SVG - You would replace this with your actual SVG */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] bg-repeat"></div>
          {/* Purple/Blue Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#bd00ff]/10 to-[#00f2ff]/5"></div>
        </div>

        {/* --- Main Content --- */}
        <div className="relative z-10 px-6 py-16 md:py-20 flex flex-col items-center text-center">
          
          {/* Badge - Absolutely positioned in top-right */}
          <div className="hidden md:flex absolute top-6 right-6 bg-[#11112b]/90 backdrop-blur-md border border-[#00f2ff]/50 rounded-xl p-3 items-center gap-3 shadow-[0_0_15px_rgba(0,242,255,0.2)]">
            <div className="p-2 bg-[#1a1a2e] rounded-lg">
              <FaUserCog className="text-[#00f2ff] text-2xl" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg leading-none">5+ Happy Clients</p>
              <p className="text-[#00f2ff] text-sm font-medium">Verified</p>
            </div>
          </div>

          {/* Headings */}
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-2">
            Need a custom web solution?
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            I'm Available for <span className="text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]">Freelance Work.</span>
          </h1>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="px-10 py-4 bg-[#00f2ff] text-[#0a0a1a] font-bold text-lg rounded-full shadow-[0_0_20px_#00f2ff80] hover:shadow-[0_0_40px_#00f2ff] hover:scale-105 transition-all duration-300"
          >
            Hire Me for a Project
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Freelance;