import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeIcon, ExternalLinkIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Petition Handler System",
      description: "Advanced petition management system utilizing Natural Language Processing for automated categorization and sentiment analysis. Features intelligent routing, priority assignment, and real-time status tracking.",
      technologies: ["Python", "NLP", "Flask", "SQLAlchemy", "TensorFlow"],
      features: [
        "Automated petition categorization using NLP",
        "Sentiment analysis for priority assignment",
        "Real-time status tracking and notifications",
        "Administrative dashboard with analytics",
        "Multi-language support"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      github: "https://github.com/mohammed-muzzammil/petition-handler",
      demo: "https://petition-handler-demo.vercel.app",
      category: "Web Application"
    },
    {
      title: "Smart Route Planner",
      description: "Intelligent route optimization system built in C that calculates the most efficient paths between multiple destinations. Implements advanced algorithms for real-time traffic analysis and dynamic route adjustment.",
      technologies: ["C", "Algorithms", "Data Structures", "Graph Theory"],
      features: [
        "Dijkstra's algorithm for shortest path",
        "Real-time traffic integration",
        "Multi-destination optimization",
        "Memory-efficient implementation",
        "Cross-platform compatibility"
      ],
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop",
      github: "https://github.com/mohammed-muzzammil/route-planner",
      demo: "https://route-planner-demo.vercel.app",
      category: "Algorithm"
    },
    {
      title: "University Admission System",
      description: "Comprehensive admission management platform streamlining the entire application process. Features automated document verification, merit-based ranking, and integrated communication system.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
      features: [
        "Online application portal",
        "Document verification system",
        "Merit-based ranking algorithm",
        "Payment gateway integration",
        "Email notification system"
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      github: "https://github.com/mohammed-muzzammil/admission-system",
      demo: "https://admission-system-demo.vercel.app",
      category: "Web Application"
    },
    {
      title: "Advanced Tic Tac Toe",
      description: "Modern take on the classic game with Java GUI, featuring AI opponent with multiple difficulty levels, multiplayer support, and customizable game modes including larger grid variations.",
      technologies: ["Java", "Swing", "AI Algorithms", "OOP"],
      features: [
        "AI opponent with multiple difficulty levels",
        "Multiplayer local and network play",
        "Customizable grid sizes (3x3 to 10x10)",
        "Game statistics and replay system",
        "Modern GUI with animations"
      ],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      github: "https://github.com/mohammed-muzzammil/tic-tac-toe",
      demo: "https://tic-tac-toe-demo.vercel.app",
      category: "Game"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating problem-solving skills and innovative solutions
            </p>
          </motion.div>

          {/* Featured Project Carousel */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {projects[activeProject].category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {projects[activeProject].description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-zinc-700/50 text-zinc-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-400 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {projects[activeProject].features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-zinc-300 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <CodeIcon className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={projects[activeProject].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeProject ? 'bg-blue-400' : 'bg-zinc-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">All Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                  }}
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => setActiveProject(index)}
                >
                  <div className="relative h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">{project.title}</h4>
                      <p className="text-zinc-300 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;