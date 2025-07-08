import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeIcon, CogIcon, DatabaseIcon, DeviceMobileIcon } from '@heroicons/react/outline';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: CodeIcon,
      skills: [
        { name: "Java", level: 85, color: "from-orange-400 to-red-500" },
        { name: "Python", level: 80, color: "from-blue-400 to-yellow-500" },
        { name: "C", level: 75, color: "from-gray-400 to-blue-500" },
        { name: "JavaScript", level: 70, color: "from-yellow-400 to-orange-500" }
      ]
    },
    {
      title: "Web Technologies",
      icon: DeviceMobileIcon,
      skills: [
        { name: "HTML5", level: 90, color: "from-orange-500 to-red-600" },
        { name: "CSS3", level: 85, color: "from-blue-500 to-purple-600" },
        { name: "React", level: 75, color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", level: 70, color: "from-green-400 to-emerald-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: CogIcon,
      skills: [
        { name: "Git", level: 85, color: "from-orange-400 to-red-500" },
        { name: "GitHub", level: 80, color: "from-gray-400 to-black" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-purple-600" },
        { name: "Linux", level: 75, color: "from-yellow-400 to-orange-500" }
      ]
    },
    {
      title: "Databases",
      icon: DatabaseIcon,
      skills: [
        { name: "MySQL", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 75, color: "from-green-400 to-green-600" },
        { name: "PostgreSQL", level: 70, color: "from-blue-500 to-purple-600" },
        { name: "SQLite", level: 85, color: "from-cyan-400 to-blue-500" }
      ]
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical proficiency across various domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 font-medium">{skill.name}</span>
                        <span className="text-zinc-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Docker', 'AWS', 'Firebase', 'GraphQL', 'TypeScript', 'Sass', 'Webpack',
                'Jest', 'Redux', 'Express.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                  }}
                  className="bg-zinc-800/50 border border-zinc-700 hover:border-blue-400 px-4 py-2 rounded-full text-zinc-300 hover:text-blue-400 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;