import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Cyan Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] bg-[#00f2ff]/20 rounded-full blur-[110px] animate-pulse duration-2000" />

      {/* Bottom Right Purple Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] bg-[#8a2be2]/20 rounded-full blur-[110px] animate-pulse duration-3000" />
      
      {/* Middle Subtle Blue-Purple Atmospheric Mist */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff11] via-transparent to-[#8a2be211] blur-3xl" />

      {/* Grainy Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-soft-light"></div>

      {/* Animated Scan Line Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffffff05] to-transparent animate-scanline"></div>

      {/* Floating Hexagons */}
      <div className="absolute top-[15%] left-[25%] w-14 h-14 border border-[#00f2ff66] rounded-xl animate-float-slow blur-[0.5px]"></div>
      <div className="absolute top-[60%] left-[75%] w-10 h-10 border border-[#8a2be266] rounded-xl animate-float-medium"></div>
      <div className="absolute top-[40%] left-[10%] w-8 h-8 border border-[#00f2ff44] rounded-xl animate-float-fast"></div>

      {/* Parallax Floating Orbs */}
      <div className="orb orb-cyan"></div>
      <div className="orb orb-purple"></div>

      {/* Parallax Lines and Dots (Desktop Only) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25] hidden md:block">
        <line x1="15%" y1="20%" x2="35%" y2="45%" stroke="#00f2ff33" strokeWidth="1.5" />
        <circle cx="15%" cy="20%" r="4" fill="#00f2ff" />
        <line x1="75%" y1="60%" x2="90%" y2="80%" stroke="#8a2be233" strokeWidth="1.5" />
        <circle cx="90%" cy="80%" r="4" fill="#8a2be2" />
      </svg>
    </div>
  );
};

export default BackgroundEffects;
