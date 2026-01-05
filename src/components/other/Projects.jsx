import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // CHANGED: Show 4 projects initially
  const INITIAL_LIMIT = 4;

  const projects = [
    {
      title: "E-Commerce Platform",
      tech: "MERN Stack, Redux, Stripe",
      description: "A fully functional online store with payment gateway integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      repoLink: "#",
      isFreelance: true
    },
    {
      title: "Task Management App",
      tech: "React, Node, MongoDB",
      description: "A collaborative tool for teams to track progress, assign tasks, and manage workflows efficiently.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      repoLink: "#",
      isFreelance: false
    },
    {
      title: "Real-time Chat App",
      tech: "Socket.io, React, Express",
      description: "Instant messaging application supporting private chats, group rooms, and media sharing.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      repoLink: "#",
      isFreelance: false
    },
    {
      title: "Portfolio V1",
      tech: "HTML, CSS, JavaScript",
      description: "My first personal portfolio website showcasing early frontend development skills.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      repoLink: "#",
      isFreelance: false
    },
    // --- Added 2 New Projects so "View More" has content ---
    {
      title: "Weather Dashboard",
      tech: "React, OpenWeatherMap API",
      description: "A sleek weather forecasting app providing real-time data and 5-day forecasts for any city.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      repoLink: "#",
      isFreelance: false
    },
    {
      title: "Blog CMS",
      tech: "Node.js, Express, MongoDB",
      description: "A content management system allowing users to create, edit, and publish blog posts securely.",
      image: "https://images.unsplash.com/photo-1499750310159-5b600aaf0320?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      repoLink: "#",
      isFreelance: false
    }
  ];

  // Logic to determine which projects to display
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_LIMIT);

  return (
    <section id="projects" className="relative w-full py-20 px-4 md:px-12 bg-[#0a0a1a]">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#bd00ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#00f2ff]">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f2ff] to-[#bd00ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative bg-[#11112b] border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] hover:border-[#00f2ff]/30 transition-all duration-300 flex flex-col sm:flex-row h-full sm:h-64"
              >
                
                {/* Ribbon for Freelance Projects */}
                {project.isFreelance && (
                  <div className="absolute top-0 right-0 z-20 overflow-hidden w-32 h-32 pointer-events-none">
                    <div className="absolute top-6 -right-8 w-40 h-8 bg-[#00f2ff] text-[#0a0a1a] font-bold text-xs flex items-center justify-center transform rotate-45 shadow-lg">
                      Freelance Project
                    </div>
                  </div>
                )}

                {/* Thumbnail Image */}
                <div className="w-full sm:w-1/2 h-48 sm:h-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0a0a1a]/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f2ff] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-gray-400 bg-[#1a1a2e] px-2 py-1 rounded border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto flex gap-4">
                    <a 
                      href={project.liveLink} 
                      className="flex items-center gap-2 px-4 py-2 bg-[#00f2ff] text-[#0a0a1a] text-sm font-bold rounded-lg hover:shadow-[0_0_15px_#00f2ff80] transition-all"
                    >
                      View Live <FaExternalLinkAlt size={12} />
                    </a>
                    <a 
                      href={project.repoLink} 
                      className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 hover:border-white transition-all"
                    >
                      GitHub <FaGithub size={14} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        {projects.length > INITIAL_LIMIT && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 bg-[#11112b] border border-[#00f2ff] text-[#00f2ff] font-bold rounded-full hover:bg-[#00f2ff] hover:text-[#0a0a1a] transition-all shadow-[0_0_15px_rgba(0,242,255,0.2)]"
            >
              {showAll ? (
                <>View Less Projects <FaChevronUp /></>
              ) : (
                <>View More Projects <FaChevronDown /></>
              )}
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;