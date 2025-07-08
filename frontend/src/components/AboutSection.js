import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/outline';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const highlights = [
    {
      icon: CodeIcon,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: LightBulbIcon,
      title: "Problem Solving",
      description: "Analytical thinking to solve complex challenges"
    },
    {
      icon: RocketLaunchIcon,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              />
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-zinc-300 leading-relaxed"
            >
              I'm a passionate Computer Science Engineering student with an insatiable curiosity for technology 
              and problem-solving. Currently in my journey at MKCE, I've developed a strong foundation in 
              multiple programming languages and frameworks.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-zinc-300 leading-relaxed"
            >
              My enthusiasm lies in creating innovative solutions that make a difference. Whether it's developing 
              efficient algorithms, building user-friendly applications, or exploring the latest in AI and machine 
              learning, I'm always eager to learn and grow.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                    }}
                    className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-4 text-center group"
                  >
                    <highlight.icon className="w-8 h-8 mx-auto mb-2 text-blue-400 group-hover:text-purple-400 transition-colors" />
                    <h3 className="font-semibold text-white mb-1">{highlight.title}</h3>
                    <p className="text-sm text-zinc-400">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-80 h-80 mx-auto relative"
              >
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"></div>
                
                {/* Middle ring */}
                <div className="absolute inset-8 rounded-full border-2 border-purple-400/30"></div>
                
                {/* Inner ring */}
                <div className="absolute inset-16 rounded-full border-2 border-pink-400/30"></div>
                
                {/* Center circle */}
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">7.67</div>
                    <div className="text-sm text-zinc-400">CGPA</div>
                  </div>
                </div>

                {/* Floating elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    style={{
                      left: `${45 + 35 * Math.cos(i * Math.PI / 3)}%`,
                      top: `${45 + 35 * Math.sin(i * Math.PI / 3)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;