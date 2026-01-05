import React, { useState } from 'react';
import Navbar from './Navbar';
import BackgroundEffects from './BackgroundEffects';
import SocialSidebar from './SocialSidebar';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

const Landing = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`relative w-full min-h-screen font-sans selection:bg-[#00f2ff] selection:text-black ${darkMode ? 'bg-[#0a0a1a]' : 'bg-gray-100'} transition-colors duration-300 overflow-x-hidden`}>
      
      {/* 1. Background Effects */}
      <BackgroundEffects />

      {/* 2. Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      {/* 3. Main Hero Layout */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between pt-32 md:pt-20 pb-12 gap-10 md:gap-0">
        
        {/* Sidebar */}
        <SocialSidebar />
        
        {/* Left Column */}
        <HeroText />
        
        {/* Right Column */}
        <HeroImage />
        
      </div>
    </div>
  );
};

export default Landing;