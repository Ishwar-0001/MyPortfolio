import React from 'react';
import { motion } from 'framer-motion';
import { RiCodeSSlashLine, RiCpuLine, RiWifiLine } from 'react-icons/ri';

const HeroImage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full md:w-1/2 flex justify-center items-center relative order-1 md:order-2 mt-16 md:mt-0"
    >
      {/* --- BACKGROUND GLOW ATMOSPHERE --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f2ff]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- MAIN TECH CONTAINER --- */}
      <div className="relative w-[320px] h-[380px] md:w-[400px] md:h-[480px]">
        
        {/* 1. ROTATING TECH RINGS (Behind) */}
        <div className="absolute inset-[-40px] flex items-center justify-center pointer-events-none">
           {/* Outer Ring - Cyan */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute w-full h-full border border-[#00f2ff]/20 rounded-full border-dashed"
           />
           {/* Inner Ring - Purple (Counter Rotate) */}
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute w-[90%] h-[90%] border border-[#bd00ff]/20 rounded-full border-dotted"
           />
        </div>

        {/* 2. THE IMAGE FRAME (Glassmorphic & Styled) */}
        <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-[#ffffff10] bg-[#0a0a1a]/50 backdrop-blur-sm shadow-2xl group">
          
          {/* A. Image Filter Layers (The "Hologram" Look) */}
          <div className="absolute inset-0 z-0">
             {/* Layer 1: The Base Image (Grayscale + High Contrast) */}
             <img 
               src="/myImg.png" 
               alt="Ishwar" 
               className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
             />
             
             {/* Layer 2: Color Tint Overlay (Cyan/Purple Gradient Map) */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a1a] via-[#8a2be2]/20 to-[#00f2ff]/30 mix-blend-hard-light"></div>
             
             {/* Layer 3: Glitch Shift (Visible on Hover) */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00f2ff]/10 to-transparent opacity-0 group-hover:opacity-100 mix-blend-color-dodge transition-opacity duration-300"></div>
          </div>

          {/* B. Scanning Laser Effect */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-[#00f2ff] shadow-[0_0_15px_#00f2ff] z-10 opacity-50"
          >
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#00f2ff]/20 to-transparent transform -translate-y-full"></div>
          </motion.div>

          {/* C. Digital Grid Overlay (Scanlines) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none"></div>

          {/* D. Bottom Fade (Seamless blend) */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent z-20"></div>

          {/* E. HUD Elements (Decorations) */}
          <div className="absolute top-6 right-6 z-30 flex flex-col gap-1 items-end">
             <div className="flex gap-1">
               <div className="w-1 h-1 bg-[#00f2ff] rounded-full"></div>
               <div className="w-1 h-1 bg-[#00f2ff] rounded-full opacity-50"></div>
               <div className="w-1 h-1 bg-[#00f2ff] rounded-full opacity-25"></div>
             </div>
             <span className="text-[10px] font-mono text-[#00f2ff]">SYS.ONLINE</span>
          </div>

        </div>

        {/* 3. FLOATING DATA CARDS (3D Hover Effect) */}
        
        {/* Card 1: Top Right - Tech Stack */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-8 top-12 z-30"
        >
          <div className="bg-[#0a0a1a]/80 backdrop-blur-md border border-[#00f2ff]/30 p-3 rounded-lg shadow-[0_0_15px_rgba(0,242,255,0.15)] flex items-center gap-3">
            <div className="p-2 bg-[#00f2ff]/10 rounded-md">
              <RiCodeSSlashLine className="text-[#00f2ff] text-xl" />
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-mono">STACK</div>
              <div className="text-xs font-bold text-white">Full MERN</div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Bottom Left - Status */}
        <motion.div 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-8 bottom-20 z-30"
        >
          <div className="bg-[#0a0a1a]/80 backdrop-blur-md border border-[#bd00ff]/30 p-3 rounded-lg shadow-[0_0_15px_rgba(189,0,255,0.15)] flex items-center gap-3">
            <div className="relative p-2 bg-[#bd00ff]/10 rounded-md">
              <RiCpuLine className="text-[#bd00ff] text-xl" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bd00ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bd00ff]"></span>
              </span>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-mono">STATUS</div>
              <div className="text-xs font-bold text-white">Available</div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Floating Signal (Small) */}
        <motion.div
           animate={{ x: [-5, 5, -5] }}
           transition={{ duration: 3, repeat: Infinity }}
           className="absolute -left-4 top-1/2 z-20 w-8 h-8 bg-[#11112b] border border-white/10 rounded-full flex items-center justify-center"
        >
            <RiWifiLine className="text-gray-500 text-xs" />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HeroImage;