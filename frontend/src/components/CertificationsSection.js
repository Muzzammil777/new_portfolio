import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BadgeCheckIcon, ExternalLinkIcon, CalendarIcon, OfficeBuildingIcon } from '@heroicons/react/outline';

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Java Programming Fundamentals",
      organization: "Great Learning",
      year: "2024",
      description: "Comprehensive course covering Java basics, OOP concepts, data structures, and advanced programming techniques.",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      certificateUrl: "/certificates/java-great-learning.pdf",
      logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Data Visualization with Python",
      organization: "Coursera (University of Illinois)",
      year: "2024",
      description: "Advanced data visualization techniques using Python libraries like Matplotlib, Seaborn, and Plotly for creating compelling data stories.",
      skills: ["Python", "Matplotlib", "Seaborn", "Data Analysis"],
      certificateUrl: "/certificates/data-viz-coursera.pdf",
      logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Search Engine Optimization (SEO)",
      organization: "Coursera (UC Davis)",
      year: "2023",
      description: "Comprehensive SEO strategies, keyword research, on-page optimization, and digital marketing fundamentals.",
      skills: ["SEO", "Digital Marketing", "Analytics", "Content Strategy"],
      certificateUrl: "/certificates/seo-coursera.pdf",
      logo: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=100&h=100&fit=crop",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Python for Data Science and AI",
      organization: "IBM",
      year: "2023",
      description: "Foundational course in Python programming for data science, machine learning, and artificial intelligence applications.",
      skills: ["Python", "Data Science", "AI", "Machine Learning"],
      certificateUrl: "/certificates/python-ibm.pdf",
      logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Advanced Web Development",
      organization: "Self-Paced Learning",
      year: "2024",
      description: "Modern web development practices including React, Node.js, and full-stack development methodologies.",
      skills: ["React", "Node.js", "Full-Stack", "Modern JS"],
      certificateUrl: "/certificates/web-dev-advanced.pdf",
      logo: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Database Management Systems",
      organization: "Online Learning Platform",
      year: "2023",
      description: "Comprehensive database concepts, SQL programming, and database design principles for enterprise applications.",
      skills: ["SQL", "Database Design", "MySQL", "PostgreSQL"],
      certificateUrl: "/certificates/dbms-certification.pdf",
      logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements that validate my expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                }}
                className="group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img 
                        src={cert.logo} 
                        alt={cert.organization}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="absolute -top-1 -right-1">
                        <BadgeCheckIcon className={`w-6 h-6 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <OfficeBuildingIcon className="w-4 h-4 text-zinc-400" />
                        <span className="text-zinc-400 text-sm">{cert.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <CalendarIcon className="w-4 h-4 text-zinc-400" />
                        <span className="text-zinc-400 text-sm">{cert.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-zinc-700/50 text-zinc-300 px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${cert.color} bg-opacity-20 hover:bg-opacity-30 border border-current rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 text-white`}
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{certifications.length}</div>
                <div className="text-zinc-400">Total Certifications</div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                <div className="text-zinc-400">Platforms</div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">2024</div>
                <div className="text-zinc-400">Latest Year</div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
                <div className="text-zinc-400">Skills Covered</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;