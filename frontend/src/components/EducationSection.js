import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, CalendarIcon, LocationMarkerIcon, StarIcon } from '@heroicons/react/outline';

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "MKCE (Madras Institute of Technology Campus)",
      duration: "2023 - Present",
      grade: "CGPA: 7.67",
      description: "Pursuing comprehensive education in computer science fundamentals, algorithms, data structures, and modern software development practices.",
      status: "current"
    },
    {
      degree: "Higher Secondary Education",
      institution: "KSVHSS (Kendriya Sainik Vidyalaya)",
      duration: "2021 - 2023",
      grade: "93.67%",
      description: "Completed with distinction in Science stream, building a strong foundation in Mathematics and Physics.",
      status: "completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              My academic journey in computer science and engineering
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-zinc-900 z-10"></div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                    }}
                    className="ml-16 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 w-full group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <AcademicCapIcon className="w-5 h-5 text-blue-400" />
                          {item.status === 'current' && (
                            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {item.degree}
                        </h3>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-zinc-400">
                            <LocationMarkerIcon className="w-4 h-4" />
                            <span>{item.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-400">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                        </div>

                        <p className="text-zinc-300 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="lg:ml-6 lg:text-right">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg px-4 py-2"
                        >
                          <StarIcon className="w-4 h-4 text-yellow-400" />
                          <span className="text-white font-semibold">{item.grade}</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;