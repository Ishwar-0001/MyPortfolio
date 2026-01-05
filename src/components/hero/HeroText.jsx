import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroText = () => {
  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
      className="w-full md:w-1/2 text-center md:text-left pl-0 lg:pl-16 xl:pl-20 order-2 md:order-1"
    >
      <motion.p variants={textVariants} className="text-gray-400 text-base md:text-lg mb-2 font-medium tracking-wide">
        Hello World,
      </motion.p>
      
      <motion.h1
  variants={textVariants}
  initial="hidden"
  animate="visible"
  className="flex items-center gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
>
  Hi, I'm{" "}
  
  <span className="text-[#00f2ff] align-middle text-inherit leading-none">[</span>

  <motion.span
    className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 align-middle leading-none"
    initial={{ width: 0 }}
    animate={{ width: "auto" }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      borderRight: "3px solid #00f2ff",
      verticalAlign: "middle",
      paddingRight: "8px",
      lineHeight: "1.1",
    }}
  >
    Ishwar
  </motion.span>

  <span className="text-[#00f2ff] align-middle text-inherit leading-none">]</span>
</motion.h1>


      <motion.h2 variants={textVariants} className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-light max-w-lg mx-auto md:mx-0">
        MERN Stack Developer <span className="text-[#bd00ff] mx-2">|</span> Turning Ideas into Digital Reality.
      </motion.h2>

      <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4 md:mt-8 w-full sm:w-auto">
        <button className="px-8 py-3 bg-[#00f2ff] text-[#0a0a1a] font-bold rounded-lg shadow-[0_0_20px_#00f2ff40] hover:shadow-[0_0_30px_#00f2ff60] transition-all hover:-translate-y-1 w-full sm:w-auto">
          Download Resume
        </button>
        <button className="px-8 py-3 bg-transparent border border-[#bd00ff] text-white font-medium rounded-lg hover:bg-[#bd00ff]/10 hover:shadow-[0_0_20px_#bd00ff40] transition-all w-full sm:w-auto">
          View Projects
        </button>
      </motion.div>

      {/* Mobile Social Icons */}
      <motion.div variants={textVariants} className="flex md:hidden gap-6 justify-center mt-8 text-2xl">
         <a href="#" className="text-gray-400 hover:text-[#00f2ff]"><FaLinkedin /></a>
         <a href="#" className="text-gray-400 hover:text-[#00f2ff]"><FaGithub /></a>
         <a href="#" className="text-gray-400 hover:text-[#00f2ff]"><FaEnvelope /></a>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;