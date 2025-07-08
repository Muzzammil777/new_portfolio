import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon, BadgeCheckIcon, SparklesIcon, FireIcon } from '@heroicons/react/outline';

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "1st Prize - Code & Debug Competition",
      organization: "JJ College of Engineering and Technology",
      date: "February 2024",
      description: "Won first place in competitive programming contest focusing on algorithm optimization and debugging skills.",
      icon: StarIcon,
      color: "from-yellow-400 to-orange-500",
      category: "Competition"
    },
    {
      title: "Outstanding Academic Performance",
      organization: "MKCE",
      date: "2023-2024",
      description: "Maintained excellent academic standing with CGPA of 7.67 throughout the academic year.",
      icon: StarIcon,
      color: "from-blue-400 to-purple-500",
      category: "Academic"
    },
    {
      title: "High School Excellence",
      organization: "KSVHSS",
      date: "2023",
      description: "Graduated with distinction achieving 93.67% in Higher Secondary Education.",
      icon: BadgeCheckIcon,
      color: "from-green-400 to-emerald-500",
      category: "Academic"
    },
    {
      title: "Tech Innovation Enthusiast",
      organization: "Self-Driven Learning",
      date: "Ongoing",
      description: "Continuously exploring cutting-edge technologies including AI, Machine Learning, and modern web frameworks.",
      icon: SparklesIcon,
      color: "from-purple-400 to-pink-500",
      category: "Learning"
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
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Recognition and milestones that mark my journey in technology and academics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                }}
                className="group relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} bg-opacity-20`}>
                      <achievement.icon className={`w-8 h-8 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${achievement.color} bg-opacity-20 text-white`}>
                          {achievement.category}
                        </span>
                        <span className="text-zinc-400 text-sm">{achievement.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm mb-3">
                        {achievement.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-zinc-300 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <achievement.icon className="w-16 h-16" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "7.67", label: "Current CGPA", color: "from-blue-400 to-cyan-500" },
              { number: "93.67%", label: "HSE Score", color: "from-green-400 to-emerald-500" },
              { number: "1st", label: "Prize Winner", color: "from-yellow-400 to-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-lg"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-zinc-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;