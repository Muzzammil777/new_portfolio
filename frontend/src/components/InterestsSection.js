import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SparklesIcon, CogIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/outline';

const InterestsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: SparklesIcon,
      title: "Generative AI",
      description: "Exploring the cutting-edge world of generative artificial intelligence, large language models, and creative AI applications.",
      color: "from-purple-400 to-pink-500",
      topics: ["GPT Models", "Image Generation", "Creative AI", "Prompt Engineering"]
    },
    {
      icon: CogIcon,
      title: "Machine Learning",
      description: "Deep diving into ML algorithms, neural networks, and practical applications of artificial intelligence in real-world scenarios.",
      color: "from-blue-400 to-cyan-500",
      topics: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      icon: LightBulbIcon,
      title: "Innovation & Research",
      description: "Passionate about staying at the forefront of technology, exploring emerging trends and contributing to open-source projects.",
      color: "from-yellow-400 to-orange-500",
      topics: ["Tech Trends", "Open Source", "Research Papers", "Hackathons"]
    },
    {
      icon: RocketLaunchIcon,
      title: "Emerging Technologies",
      description: "Fascinated by breakthrough technologies that have the potential to reshape industries and human experiences.",
      color: "from-green-400 to-emerald-500",
      topics: ["Blockchain", "IoT", "AR/VR", "Quantum Computing"]
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
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Interests & Passions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Areas of technology and innovation that fuel my curiosity and drive continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${interest.color} bg-opacity-20`}>
                      <interest.icon className={`w-8 h-8 bg-gradient-to-r ${interest.color} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {interest.title}
                    </h3>
                  </div>

                  <p className="text-zinc-300 leading-relaxed mb-6">
                    {interest.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-zinc-400 mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {interest.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="bg-zinc-700/50 text-zinc-300 px-3 py-1 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Journey */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Continuous Learning Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">🚀</div>
                  <h4 className="font-semibold text-white mb-2">Always Exploring</h4>
                  <p className="text-zinc-400 text-sm">
                    Constantly learning new technologies and methodologies to stay ahead in the ever-evolving tech landscape.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">🧠</div>
                  <h4 className="font-semibold text-white mb-2">Research Focused</h4>
                  <p className="text-zinc-400 text-sm">
                    Regularly reading research papers, attending webinars, and participating in tech communities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">💡</div>
                  <h4 className="font-semibold text-white mb-2">Innovation Driven</h4>
                  <p className="text-zinc-400 text-sm">
                    Applying cutting-edge concepts to real-world problems and contributing to open-source projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;