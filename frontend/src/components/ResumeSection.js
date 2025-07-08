import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DocumentDownloadIcon, EyeIcon, PrinterIcon, ShareIcon } from '@heroicons/react/outline';

const ResumeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resumeActions = [
    {
      icon: DocumentDownloadIcon,
      label: "Download PDF",
      description: "Get a copy of my resume in PDF format",
      action: () => window.open('/resume/mohammed-muzzammil-resume.pdf', '_blank'),
      color: "from-blue-500 to-purple-600",
      hoverColor: "from-blue-600 to-purple-700"
    },
    {
      icon: EyeIcon,
      label: "View Online",
      description: "View my resume directly in your browser",
      action: () => window.open('/resume/mohammed-muzzammil-resume.pdf', '_blank'),
      color: "from-green-500 to-emerald-600",
      hoverColor: "from-green-600 to-emerald-700"
    },
    {
      icon: PrinterIcon,
      label: "Print Copy",
      description: "Print a physical copy of my resume",
      action: () => window.print(),
      color: "from-orange-500 to-red-600",
      hoverColor: "from-orange-600 to-red-700"
    },
    {
      icon: ShareIcon,
      label: "Share Resume",
      description: "Share my resume with others",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Mohammed Muzzammil A K - Resume',
            text: 'Check out my resume and portfolio',
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      },
      color: "from-purple-500 to-pink-600",
      hoverColor: "from-purple-600 to-pink-700"
    }
  ];

  const resumeHighlights = [
    {
      title: "Education",
      content: "B.E. Computer Science • CGPA: 7.67"
    },
    {
      title: "Skills",
      content: "Java, Python, C, Web Dev, AI/ML"
    },
    {
      title: "Experience",
      content: "4+ Projects • 1st Prize Winner"
    },
    {
      title: "Certifications",
      content: "6 Professional Certifications"
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

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Resume
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Download or view my comprehensive resume showcasing my skills, experience, and achievements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Resume Highlights</h3>
                <div className="space-y-4">
                  {resumeHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-zinc-700/50 rounded-lg"
                    >
                      <div className="font-semibold text-blue-400">{highlight.title}</div>
                      <div className="text-zinc-300 text-sm">{highlight.content}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Resume Preview Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 text-center"
              >
                <div className="bg-white rounded-lg p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-zinc-800 rounded w-3/4 mx-auto"></div>
                    <div className="h-2 bg-zinc-600 rounded w-1/2 mx-auto"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-zinc-400 rounded w-full"></div>
                      <div className="h-2 bg-zinc-400 rounded w-5/6"></div>
                      <div className="h-2 bg-zinc-400 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
                <p className="text-zinc-400 mt-4 text-sm">Resume Preview</p>
              </motion.div>
            </motion.div>

            {/* Resume Actions */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Get My Resume</h3>
                <p className="text-zinc-400">Choose how you'd like to access my resume</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeActions.map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className={`group bg-gradient-to-r ${action.color} hover:${action.hoverColor} text-white p-6 rounded-lg transition-all duration-300 text-left`}
                  >
                    <action.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold mb-2">{action.label}</h4>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </motion.button>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">Updated Resume</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Last updated: January 2025 • Always current with latest achievements
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
                  <span>📄 PDF Format</span>
                  <span>🎨 ATS-Friendly</span>
                  <span>⚡ Quick Download</span>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">Interested in collaborating?</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Let's discuss how I can contribute to your team and projects
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;