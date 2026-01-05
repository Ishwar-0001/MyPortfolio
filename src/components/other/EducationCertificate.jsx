import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa';

const EducationCertificate = () => {
  return (
    <section id="education" className="relative w-full py-20 px-4 md:px-12 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* --- Column 1: Education --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              Education
            </h2>
            
            <div className="bg-[#11112b] border border-white/10 p-6 rounded-2xl hover:border-[#00f2ff]/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,242,255,0.1)] group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1a1a2e] rounded-lg border border-white/5 group-hover:border-[#00f2ff]/50 transition-colors">
                  <FaGraduationCap className="text-[#00f2ff] text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00f2ff] transition-colors">
                    Bachelor of Technology (B.Tech) in Computer Science
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm font-medium">
                    [University Name], [Year]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Column 2: Certifications --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Certifications
            </h2>

            <div className="bg-[#11112b] border border-white/10 p-6 rounded-2xl flex flex-col gap-6 shadow-lg">
              
              {/* Certification Item 1 */}
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-[#1a1a2e] border border-white/5">
                  <FaCertificate className="text-[#00f2ff] text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium group-hover:text-[#00f2ff] transition-colors">
                    Full Stack Web Development
                  </h3>
                  <span className="text-gray-500 text-sm">(Coding Blocks)</span>
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-white/5"></div>

              {/* Certification Item 2 */}
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-[#1a1a2e] border border-white/5">
                  <FaAward className="text-[#bd00ff] text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-medium group-hover:text-[#bd00ff] transition-colors">
                    React Native Specialist
                  </h3>
                  <span className="text-gray-500 text-sm">(Udemy)</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EducationCertificate;