import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 flex-col gap-6 p-4 bg-[#11112b]/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl z-40">
      <a href="#" className="text-gray-400 hover:text-[#00f2ff] text-xl transition-all hover:scale-110"><FaLinkedin /></a>
      <a href="#" className="text-gray-400 hover:text-[#00f2ff] text-xl transition-all hover:scale-110"><FaGithub /></a>
      <a href="#" className="text-gray-400 hover:text-[#00f2ff] text-xl transition-all hover:scale-110"><FaEnvelope /></a>
    </div>
  );
};

export default SocialSidebar;