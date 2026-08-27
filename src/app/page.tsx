'use client';

import { useState, useCallback } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { CursorProvider } from '@/components/ui/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';
import AboutSection from '@/components/about/AboutSection';
import Marquee from '@/components/animations/Marquee';
import SectionTransition from '@/components/animations/SectionTransition';
import ExperienceSection from '@/components/experience/ExperienceSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ArchitectureSection from '@/components/architecture/ArchitectureSection';
import TerminalSection from '@/components/ui/TerminalSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useSmoothScroll();

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <CursorProvider>
      {/* Loading Screen */}
      {!isLoaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Marquee band */}
        <Marquee
          items={['Backend', 'Architecture', 'Cloud', 'Software', 'Systems', 'APIs', 'Scale']}
        />

        <SectionTransition variant="scale" />

        {/* About */}
        <AboutSection />

        <SectionTransition variant="wipe" />

        {/* Experience */}
        <ExperienceSection />

        {/* Marquee band reverse */}
        <Marquee
          items={['Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'RabbitMQ']}
          reverse
        />

        <SectionTransition variant="scale" />

        {/* Skills */}
        <SkillsSection />

        <SectionTransition variant="wipe" />

        {/* Projects */}
        <ProjectsSection />

        <SectionTransition variant="scale" />

        {/* Architecture */}
        <ArchitectureSection />

        <SectionTransition variant="wipe" />

        {/* Terminal */}
        <TerminalSection />

        <SectionTransition variant="fade" />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </CursorProvider>
  );
}
