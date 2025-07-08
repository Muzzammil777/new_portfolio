import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDownIcon, DocumentDownloadIcon, ExternalLinkIcon, MailIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/outline';
import { GithubIcon, LinkedinIcon, MailIcon as MailIconSolid } from 'lucide-react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import AchievementsSection from './AchievementsSection';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import ResumeSection from './ResumeSection';
import InterestsSection from './InterestsSection';
import ContactSection from './ContactSection';
import Navigation from './Navigation';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Anti-copy protection
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 's' || e.key === 'u')) {
        e.preventDefault();
      }
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Scroll observation for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-x-hidden">
      {/* Background with parallax effect */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.1) 0%, transparent 50%)`,
          y: backgroundY
        }}
      />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ResumeSection />
        <InterestsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-zinc-800 border-t border-zinc-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-zinc-400">
            © 2025 Mohammed Muzzammil A K. Portfolio. Not for reuse or redistribution.
          </p>
          <p className="text-xs text-zinc-500 mt-2">
            Protected under Creative Commons BY-NC-ND 4.0 License
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;